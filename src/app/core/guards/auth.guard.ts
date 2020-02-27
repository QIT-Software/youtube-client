import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from '@coreService/user-login.service';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private router: Router, private userLogin: UserLoginService) { }
  public canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userLogin.isLogin()) { return true; }
    this.router.navigate(['/login']);
    return false;
  }
}
