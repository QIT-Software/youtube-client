import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemComponent } from './search-item.component';
import { Router } from '@angular/router';
import { IResponseItem } from '@model/index';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DateColorService } from '@youtubeService/date-color.service';
import { BgColorDateDirective } from '../../directives/bg-color-date.directive';

@Component({
  template: `
    <app-search-item [responseItem]="responseItem"></app-search-item>
  `
})
class TestHostComponent {
  public responseItem: IResponseItem = {
    id: '123',
    snippet: {
      thumbnails : {default: { url: 'default', width: 300, height: 200} },
      title: 'Title',
      publishedAt: '2018-05-30T12:42:19.000Z'
    },
    statistics: { viewCount: '1', likeCount: '1', dislikeCount: '1', favoriteCount: '1'}
  } as IResponseItem;
}

describe('SearchItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  // let component1: SearchItemComponent;
  // let fixture1: ComponentFixture<SearchItemComponent>;
  let mockRouter;

  beforeEach(async(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate'),
    };

    TestBed.configureTestingModule({
      declarations: [
        SearchItemComponent,
        TestHostComponent,
        BgColorDateDirective
       ],
      providers: [
        { provide: Router, useValue: mockRouter },
        DateColorService
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain appropriate title', () => {
    const { debugElement } = fixture;
    const viewCount: HTMLElement = debugElement.query(By.css('.view-count span')).nativeElement;
    expect(viewCount.textContent).toEqual('1');
    expect(viewCount.textContent).toEqual(component.responseItem.statistics.viewCount);
  });

  it('should url img', () => {
    const { debugElement } = fixture;
    const element: HTMLImageElement = debugElement.query(By.css('.card-image img')).nativeElement;
    expect(element.src).toContain('default');
  });

  it('should url img 1', () => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.responseItem.snippet.thumbnails.standard = {url: 'standard', width: 300, height: 200};
    fixture.detectChanges();
    const { debugElement } = fixture;
    const element: HTMLImageElement = debugElement.query(By.css('.card-image img')).nativeElement;
    expect(element.src).toContain('standard');
  });

  it('should url img 2', () => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.responseItem.snippet.thumbnails.medium = {url: 'medium', width: 300, height: 200};
    fixture.detectChanges();
    const { debugElement } = fixture;
    const element: HTMLImageElement = debugElement.query(By.css('.card-image img')).nativeElement;
    expect(element.src).toContain('medium');
  });

  it('should url img 3', () => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.responseItem.snippet.thumbnails.high = {url: 'high', width: 300, height: 200};
    fixture.detectChanges();
    const { debugElement } = fixture;
    const element: HTMLImageElement = debugElement.query(By.css('.card-image img')).nativeElement;
    expect(element.src).toContain('high');
  });

  it('should url img 4', () => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.responseItem.snippet.thumbnails.maxres = {url: 'maxres', width: 300, height: 200};
    fixture.detectChanges();
    const { debugElement } = fixture;
    const element: HTMLImageElement = debugElement.query(By.css('.card-image img')).nativeElement;
    expect(element.src).toContain('maxres');
  });

  it('should title', () => {
    const { debugElement } = fixture;
    const element: HTMLElement = debugElement.query(By.css('.card-title')).nativeElement;
    expect(element.textContent).toEqual('Title');
  });

  it('should click at button', () => {
    const { debugElement } = fixture;
    const button: DebugElement = debugElement.query(By.css('.card-btn'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(mockRouter.navigate).toHaveBeenCalled();
  });

});
