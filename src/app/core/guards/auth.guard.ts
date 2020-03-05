import { Injectable } from '@angular/core';
import {
  CanLoad, Route, Router, ActivatedRouteSnapshot,
  RouterStateSnapshot, CanActivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserTokenService } from '@coreService/user-token.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private router?: Router, private userToken?: UserTokenService) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userToken.isLogged()) { return true; }
    this.router.navigate(['/login']);
    return false;
  }

  public canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userToken.isLogged()) { return true; }
    this.router.navigate(['/login']);
    return false;
  }
}
