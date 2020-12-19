import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {TokenStore} from '../services/token.store';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {


  constructor(private tokenStore: TokenStore) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.tokenStore.getToken() && this.tokenStore.isExpired()) {
        this.tokenStore.clearTokens();
    }
    return true;
  }
}
