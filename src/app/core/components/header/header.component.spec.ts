import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SearchDataService, ShowSettingService, RequestHttpService } from '@coreService/index';
import { CoreModule } from '../../core.module';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from '@coreService/message.service';
import { of } from 'rxjs';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockSearchDataService;
  let mockShowSettingService;
  beforeEach(async(() => {
    mockSearchDataService = {
      clear: jasmine.createSpy('clear'),
      Http: jasmine.createSpy('Http'),
      getResponseItems: jasmine.createSpy('getResponseItem').and.returnValue([1]),
    };
    mockShowSettingService = {
      hide: jasmine.createSpy('hide'),
      changeShow: of(true),
      get: jasmine.createSpy('get').and.returnValue(true)
    };
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        { provide: SearchDataService, useValue: mockSearchDataService },
        { provide: ShowSettingService, useValue: mockShowSettingService }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click at button Setting', () => {
    const {debugElement} = fixture;
    const dateElement: DebugElement = debugElement.query(By.css('.search-setting'));
    dateElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(mockSearchDataService.getResponseItems).toHaveBeenCalled();
  });

});
