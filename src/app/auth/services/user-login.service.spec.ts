import { TestBed } from '@angular/core/testing';

import { UserLoginService } from './user-login.service';
import { AuthModule } from '../auth.module';
import { CoreModule } from 'src/app/core/core.module';
import { UserTokenService, SearchDataService, RequestHttpService } from '@coreService/index';
import { Router } from '@angular/router';
import { MessageService } from '@coreService/message.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('UserLoginService', () => {
  let service: UserLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserLoginService, UserTokenService,
        SearchDataService, RequestHttpService, MessageService, HttpClient, HttpHandler, Router]
    });
    service = TestBed.inject(UserLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
