import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { UserTokenService, SearchDataService, ShowSettingService, RequestHttpService } from '@coreService/index';
import { Router } from '@angular/router';
import { CoreModule } from '../../core.module';
import { HeaderComponent } from '../header/header.component';
import { MessageService } from '@coreService/message.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SortFunctionService } from '@youtubeService/sort-function.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
//
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [UserTokenService, Router],
      imports: [CoreModule],
      // providers: [SearchDataService, MessageService, ShowSettingService,
      //   RequestHttpService, HttpClient, HttpHandler, SortFunctionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
