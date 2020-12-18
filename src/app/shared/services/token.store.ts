import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenStore {
  private readonly TOKEN = 'token';
  private readonly REFRESH_TOKEN = 'refresh_token';

  decoder: JwtHelperService;

  constructor() {
    if (this.getToken()) {
      this.init();
    }
  }

  public init(): void {
    this.decoder = new JwtHelperService(this.getToken());
  }

  public getToken(): string {
    return sessionStorage.getItem(this.TOKEN);
  }

  public getRefreshToken(): string {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  public clearTokens(): void {
    sessionStorage.removeItem(this.TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

  public setTokens(token: string, refreshToken: string): void {
    sessionStorage.setItem(this.TOKEN, token);
    localStorage.setItem(this.REFRESH_TOKEN, refreshToken);
    this.init();
  }

  public setToken(token: string): void {
    localStorage.setItem(this.TOKEN, token);
  }

  public isEmailVerified(): boolean {
    return this.decoder.decodeToken(this.getToken()).email_verified;
  }

  public getUsername(): string {
    return this.decoder.decodeToken(this.getToken()).preferred_username;
  }
}
