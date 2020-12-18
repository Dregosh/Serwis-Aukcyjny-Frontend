import {Injectable} from '@angular/core';
import {TokenStore} from './token.store';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {TokenResponse} from '../model/token-response';
import {switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

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

  public login(login: string, pass: string, redirectUrl = 'dashboard'): void {
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
    this.http.post<TokenResponse>(this.keycloakUrl, params, httpOptions)
      .pipe(tap(tokenResponse => this.tokenStore.setTokens(tokenResponse.access_token, tokenResponse.refresh_token)),
        switchMap(() => this.router.navigate([redirectUrl])))
      .subscribe();
  }

  refreshToken(): void {
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
        refresh_token: localStorage.getItem('rtoken')
      }
    });
    this.http.post<TokenResponse>(this.keycloakUrl, params, httpOptions).subscribe(data => {
      sessionStorage.setItem('token', data.access_token);
      localStorage.setItem('rtoken', data.refresh_token);
      sessionStorage.setItem('tokenExpirationDate', new Date(new Date().getTime() + data.expires_in * 1000).toString());
      sessionStorage.setItem('sessionTime', data.expires_in.toString());
    }, error => {
      console.log('Error occured while refreshing session');
    }, () => {
    });
  }

  public logout(): void {
    this.http.post(`${this.authUrl}auth/logout`, null)
      .pipe(switchMap(() => this.router.navigate(['dashboard'])))
      .subscribe();
  }


}
