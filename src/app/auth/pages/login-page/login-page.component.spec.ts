import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { UserTokenService, SearchDataService, RequestHttpService } from '@coreService/index';
import { UserLoginService } from '@authService/user-login.service';
import { Router } from '@angular/router';
// import { AuthModule } from '../../auth.module';
// import { HttpClient, HttpHandler } from '@angular/common/http';
// import { MessageService } from '@coreService/message.service';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let mockRouter: unknown;
  let mockUserTokenService: unknown;
  let mockUserLoginService: unknown;
  let url: string;

  beforeEach(async(() => {
    url = '';
    mockRouter = {
      navigate (add:  string[]): void {
        url = add.join('');
      }
    };
    mockUserTokenService = {
      isLogged(): boolean { return true; },
      logged: of(true)
    };
    mockUserLoginService = {
      deleteLogin(): void { },
      setLogin(name: string, pass: string): void {}
    };

    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: UserTokenService, useValue: mockUserTokenService },
        { provide: UserLoginService, useValue: mockUserLoginService },
    ]
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

  it('should exist login with true logged', () => {
    expect(component.login()).toBeUndefined();
  });

  it('should exist login with false logged', () => {
    component.logged = false;
    expect(component.login()).toBeUndefined();
  });

  it('should keyup not Escape', fakeAsync(() => {
    const debugElement: DebugElement = fixture.debugElement;
    const field: DebugElement = debugElement.query(By.css('.login'));
    field.triggerEventHandler('keyup', {code: 'E'});
    tick();
    fixture.detectChanges();
    expect(url).not.toEqual('/');
  }));

  it('should keyup Escape', fakeAsync(() => {
    const debugElement: DebugElement = fixture.debugElement;
    const field: DebugElement = debugElement.query(By.css('.login'));
    field.triggerEventHandler('keyup', {code: 'Escape'});
    tick();
    fixture.detectChanges();
    expect(url).toEqual('/');
  }));

});
