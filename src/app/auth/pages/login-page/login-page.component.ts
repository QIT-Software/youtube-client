import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserTokenService } from '@coreService/user-token.service';
import { UserLoginService } from '@authService/user-login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, AfterViewInit {
  @ViewChild('name') public name: ElementRef;
  @ViewChild('pass') public pass: ElementRef;
  public logged: boolean;

  constructor(private userToken?: UserTokenService,
              private userLogin?: UserLoginService,
              private router?: Router) {
    this.logged = this.userToken.isLogged();
  }

  public ngOnInit(): void {
    this.userToken.logged.subscribe((val) => {
      this.logged = val;
    });
  }

  public ngAfterViewInit(): void {
    this.name.nativeElement.focus();
  }

  public login(): void {
    if (this.logged) {
      this.userLogin.deleteLogin();
    } else {
      this.userLogin.setLogin(this.name.nativeElement.value, this.pass.nativeElement.value);
    }
  }

  public escape($event: KeyboardEvent): void {
    if ($event.code === 'Escape') {
      this.router.navigate(['/']);
    }
  }
}
