import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserLoginService } from '@service/user-login.service';
import { Router } from '@angular/router';
import { SearchDataService } from '@service/index';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('inputName') public inputName: ElementRef;
  @ViewChild('inputPass') public inputPass: ElementRef;

  constructor(private searchData: SearchDataService, private userLogin: UserLoginService,
              private router: Router) { }

  public ngOnInit(): void {
  }
  public login(): void {
    let name: string = this.inputName.nativeElement.value;
    let pass: string = this.inputPass.nativeElement.value;
    this.userLogin.setLogin(name, pass);
    this.router.navigate(['/']);
  }
  public logout(): void {
    this.userLogin.deleteLogin();
    this.searchData.clear();
    this.router.navigate(['/login']);
  }
}
