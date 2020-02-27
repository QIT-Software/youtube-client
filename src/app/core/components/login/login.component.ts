import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '@coreService/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userName: string;
  constructor(public userLogin: UserLoginService, private router: Router) {
    this.userName = this.userLogin.getName();
  }

  public ngOnInit(): void {
    this.userLogin.loadUserName.subscribe((data: string) => {
      this.userName = data;
    });
  }
  public login(): void {
    this.router.navigate(['/login']);
  }

}
