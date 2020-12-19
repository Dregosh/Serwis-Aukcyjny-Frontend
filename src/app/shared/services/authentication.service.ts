import {Injectable} from '@angular/core';
import {TokenStore} from './token.store';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {TokenResponse} from '../model/token-response';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {UserExist} from '../../auth/registration-page/model/userExist';
import {Register} from '../../auth/registration-page/model/register';

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
        switchMap(() => {
          if (this.tokenStore.isEmailVerified()) {
            return this.router.navigate([redirectUrl]);
          }
          return this.router.navigate(['auth/not-verified']);
        }));
  }

  public refreshToken(): Observable<TokenResponse> {
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
    return this.http.post<TokenResponse>(this.keycloakUrl, params, httpOptions)
      .pipe(tap((tokenResponse) => this.tokenStore.setTokens(tokenResponse.access_token, tokenResponse.refresh_token)),
        catchError((err) => {
          this.tokenStore.clearTokens();
          throw new Error(err);
        }));
  }

  public logout(): void {
    this.http.post(`${this.authUrl}auth/logout`, null)
      .pipe(
        tap(() => this.tokenStore.clearTokens()),
        switchMap(() => this.router.navigate(['dashboard'])))
      .subscribe();
  }

  public confirmAccount(token: string): Observable<any> {
    return this.http.post(`${this.authUrl}auth/email-verification`, {token});
  }

  public resendVerificationCode(): Observable<any> {
    const header = new HttpHeaders().append('Authorization', `Bearer ${this.tokenStore.getToken()}`);
    return this.http.post(`${this.authUrl}auth/resending-verification-code`, null, {headers: header});
  }

  public userExist(displayName: string, email: string): Observable<UserExist> {
    return this.http.get<UserExist>(`${this.authUrl}auth/existing/${email}/${displayName}`);
  }

  public registerUser(register: Register): Observable<any> {
    return this.http.post(`${this.authUrl}auth/register`, register);
  }

  public confirmEmailChange(token: string): Observable<any> {
    return this.http.post(`${this.authUrl}edit-user/update-email-confirmation`,
      {token});
  }
}
