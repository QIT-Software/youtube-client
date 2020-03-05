import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SearchDataService, ShowSettingService, RequestHttpService } from '@coreService/index';
import { CoreModule } from '../../core.module';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from '@coreService/message.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [SearchDataService, ShowSettingService, Router,
        SearchDataService, RequestHttpService, HttpClient, HttpHandler, MessageService],

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
});
