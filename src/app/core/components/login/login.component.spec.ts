import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { UserTokenService, SearchDataService, ShowSettingService, RequestHttpService } from '@coreService/index';
import { Router } from '@angular/router';
import { CoreModule } from '../../core.module';
import { HeaderComponent } from '../header/header.component';
import { MessageService } from '@coreService/message.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SortFunctionService } from '@youtubeService/sort-function.service';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // let responseItem: IResponseItem;
  let mockUserTokenService: unknown;
  let mockRouter;

  beforeEach(async(() => {
    // mockActivatedRoute = {snapshot: {params: {id: '123'} } };
    mockUserTokenService = {
      get(): string { return 'UserName'; },
      logged: of('token')
      };
    mockRouter = {
      navigate: jasmine.createSpy('navigate'),
    };



    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: UserTokenService, useValue: mockUserTokenService },
      ]
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

  it('click at button', () => {
    const {debugElement} = fixture;
    const dateElement: DebugElement = debugElement.query(By.css('.user .btn'));
    dateElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(mockRouter.navigate).toHaveBeenCalled();
  });
});
