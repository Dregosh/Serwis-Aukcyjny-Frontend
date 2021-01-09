import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {RedirectStore} from '../services/redirect.store';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(private authenticatedService: AuthenticationService,
              private router: Router,
              private redirectStore: RedirectStore) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authenticatedService.isLogged()) {
      return true;
    }
    this.router.navigate(['auth/login']);
    this.redirectStore.redirect = route.routeConfig.path;
    return false;
  }
}
