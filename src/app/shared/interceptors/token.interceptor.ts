import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStore} from '../services/token.store';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor{

  keycloakUrl = environment.keycloakUrl;

  constructor(private tokenStore: TokenStore) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenStore.getToken();
    if (token && req.url !== this.keycloakUrl) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return next.handle(req);
  }
}
