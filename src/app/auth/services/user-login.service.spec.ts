import { TestBed } from '@angular/core/testing';

import { UserLoginService } from './user-login.service';
import { AuthModule } from '../auth.module';
import { CoreModule } from 'src/app/core/core.module';
import { UserTokenService, SearchDataService, RequestHttpService } from '@coreService/index';
import { Router } from '@angular/router';
import { MessageService } from '@coreService/message.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('UserLoginService', () => {
  let service: UserLoginService;
  let mockRouter: unknown;
  let mockUserTokenService: unknown;
  let mockSearchDataService: unknown;
  let mockRequestHttpService: unknown;
  let mockMessageService: unknown;
  let url: string;

  beforeEach(() => {
    url = '';
    mockRouter = {
      navigate (add:  string[]): void {
        url = add.join('');
      }
    };
    mockUserTokenService = {
      set(name: string, token: string): void  {},
      delete(): void  {}
    };
    mockSearchDataService = {
      clear(): void { },
    };
    mockRequestHttpService = {
      getToken(name: string, pass: string): unknown {
        return pass ? of(name) : throwError('error');
      }
    };
    mockMessageService = {
      showUp(str: string): void {},
      hide(): void {},
      showTimer(str: string): void {}
    };


    TestBed.configureTestingModule({
      providers: [
        UserLoginService,
        { provide: Router, useValue: mockRouter },
        { provide: UserTokenService, useValue: mockUserTokenService },
        { provide: SearchDataService, useValue: mockSearchDataService },
        { provide: RequestHttpService , useValue: mockRequestHttpService  },
        { provide: MessageService, useValue: mockMessageService }
      ]
    });
    service = TestBed.inject(UserLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should setLogin method', () => {
    url = '';
    service.setLogin('token', '1');
    expect(url).toEqual('/');
  });

  it('should error set method', () => {
    url = '';
    service.setLogin('', '1');
    expect(url).toEqual('/');
  });

  it('should error http', () => {
    url = '';
    service.setLogin('', '');
    expect(url).toEqual('/');
  });

  it('should deleteLogin method', () => {
    url = '';
    service.deleteLogin();
    expect(url).toEqual('/');
  });


});
