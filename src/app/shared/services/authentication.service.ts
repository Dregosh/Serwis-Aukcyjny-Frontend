import {Injectable} from '@angular/core';
import {TokenStore} from './token.store';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {TokenResponse} from '../model/token-response';
import {switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  keycloakUrl = environment.keycloakUrl;
  authUrl = environment.apiUrl;

  constructor(private tokenStore: TokenStore,
              private http: HttpClient,
              private router: Router) {
  }

  public isLogged(): boolean {
    return this.tokenStore.getToken() && this.tokenStore.isEmailVerified();
  }

  public login(login: string, pass: string, redirectUrl = 'dashboard'): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic  ${btoa(environment.ClientId + ':' + environment.ClientSecret)}`
      })
    };
    const params = new HttpParams({
      fromObject: {
        username: login,
        password: pass,
        grant_type: 'password'
      }
    });
    return this.http.post<TokenResponse>(this.keycloakUrl, params, httpOptions)
      .pipe(tap(tokenResponse => this.tokenStore.setTokens(tokenResponse.access_token, tokenResponse.refresh_token)),
        switchMap(() => this.router.navigate([redirectUrl])));
  }

  refreshToken(): Observable<TokenResponse> {
    if (!this.tokenStore.getToken()) {
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(environment.ClientId + ':' + environment.ClientSecret)
      })
    };
    const params = new HttpParams({
      fromObject: {
        grant_type: 'refresh_token',
        refresh_token: this.tokenStore.getRefreshToken()
      }
    });
    return this.http.post<TokenResponse>(this.keycloakUrl, params, httpOptions);
  }

  public logout(): void {
    this.http.post(`${this.authUrl}auth/logout`, null)
      .pipe(
        tap(() => this.tokenStore.clearTokens()),
        switchMap(() => this.router.navigate(['dashboard'])))
      .subscribe();
  }
}
