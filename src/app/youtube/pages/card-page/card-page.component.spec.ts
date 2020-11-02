import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPageComponent } from './card-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchDataService, RequestHttpService } from '@coreService/index';
import { IResponseItem } from '@model/index';
import { BgColorDateDirective } from '../../directives/bg-color-date.directive';
import { ShadowDateDirective } from '../../directives/shadow-date.directive';
import { DateColorService } from '@youtubeService/date-color.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CardPageComponent', () => {
  let component: CardPageComponent;
  let fixture: ComponentFixture<CardPageComponent>;
  let mockActivatedRoute: unknown;
  let responseItem: IResponseItem;
  let mockSearchDataService: unknown;
  let mockRouter;

  beforeEach(async(() => {
    mockActivatedRoute = {snapshot: {params: {id: '123'} } };
    responseItem = {
      id: '123',
      snippet: {
        thumbnails : {default: { url: 'aa', width: 300, height: 200} },
        title: '',
        publishedAt: '2019-05-30T12:42:19.000Z'
      },
      statistics: { viewCount: '1', likeCount: '1', dislikeCount: '1', favoriteCount: '1'}
    } as IResponseItem;
    mockSearchDataService = {
      getItem(id: string): IResponseItem { return responseItem; },
    };
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    TestBed.configureTestingModule({
      declarations: [
        CardPageComponent,
        BgColorDateDirective,
        ShadowDateDirective
      ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: SearchDataService, useValue: mockSearchDataService },
        DateColorService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create 1', () => {
    responseItem.snippet.thumbnails.standard = { url: 'aa', width: 300, height: 200};
    fixture = TestBed.createComponent(CardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create 2', () => {
    responseItem.snippet.thumbnails.medium = { url: 'aa', width: 300, height: 200};
    fixture = TestBed.createComponent(CardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create 3', () => {
    responseItem.snippet.thumbnails.high = { url: 'aa', width: 300, height: 200};
    fixture = TestBed.createComponent(CardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create 4', () => {
    responseItem.snippet.thumbnails.maxres = { url: 'aa', width: 300, height: 200};
    fixture = TestBed.createComponent(CardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('button to back', () => {
    const {debugElement} = fixture;
    const element: DebugElement = debugElement.query(By.css('.card__back'));
    element.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(mockRouter.navigate).toHaveBeenCalled();
  });

});
