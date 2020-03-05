import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserTokenService } from '@coreService/user-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public userName: string;
  constructor(public userToken: UserTokenService, private router: Router) {
    this.userName = this.userToken.get();
  }

  public ngOnInit(): void {
    this.userToken.logged.subscribe(() => {
      this.userName = this.userToken.get();
    });
  }
  public login(): void {
    this.router.navigate(['/login']);
  }

  public ngOnDestroy(): void {
    this.userToken.logged.unsubscribe();
  }
}
