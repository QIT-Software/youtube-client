import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { UserTokenService, SearchDataService, RequestHttpService } from '@coreService/index';
import { UserLoginService } from '@authService/user-login.service';
import { Router } from '@angular/router';
import { AuthModule } from '../../auth.module';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from '@coreService/message.service';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports: [CoreModule],
      providers: [UserTokenService, UserLoginService, Router, SearchDataService,
      RequestHttpService, HttpClient, HttpHandler, MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
