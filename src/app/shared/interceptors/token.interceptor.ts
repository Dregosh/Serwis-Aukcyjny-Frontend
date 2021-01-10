import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {TokenStore} from '../services/token.store';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from '../services/authentication.service';
import {catchError, filter, finalize, switchMap, take, tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {Error} from '../model/error';
import {ErrorCodeComponent} from '../modals/error-code/error-code.component';
import {InternalErrorComponent} from '../modals/internal-error/internal-error.component';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  isRefreshingToken = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  keycloakUrl = environment.keycloakUrl;

  constructor(private tokenStore: TokenStore, private authenticationService: AuthenticationService, private dialog: MatDialog) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.applyToken(req);
    return next.handle(req)
      .pipe(catchError(err => {
        if (req.url === this.keycloakUrl) {
          this.tokenStore.clearTokens();
          return throwError(err);
        }
        if (err.status !== 401) {
          return this.handleError(err);
        }
        if (this.isRefreshingToken) {
          return this.tokenSubject
            .pipe(
              filter((token => token !== null)),
              take(1),
              switchMap(() => next.handle(this.applyToken(req))));
        } else {
          this.isRefreshingToken = true;
          this.tokenSubject.next(null);

          return this.authenticationService.refreshToken()
            .pipe(
              tap((tokenResponse) => this.tokenSubject.next(tokenResponse.access_token)),
              switchMap((tokenResponse) => next.handle(this.applyToken(req))),
              finalize(() => this.isRefreshingToken = false));
        }
      }));
  }

  private applyToken(req: HttpRequest<any>): HttpRequest<any> {
    const token = this.tokenStore.getToken();
    if (token && this.authenticationService.isLogged() && req.url !== this.keycloakUrl) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return req;
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    const error: Error = err.error;
    if (error) {
      return this.dialog.open(ErrorCodeComponent, {
        data: error.errorCode
      }).afterClosed()
        .pipe(switchMap(() => throwError(err)));
    }
    return this.dialog.open(InternalErrorComponent).afterClosed()
      .pipe(switchMap(() => throwError(err)));
  }
}
