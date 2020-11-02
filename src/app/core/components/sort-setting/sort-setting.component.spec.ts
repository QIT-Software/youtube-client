import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SortSettingComponent } from './sort-setting.component';
import { SortInputService } from '@coreService/sort-input.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('SortSettingComponent', () => {
  let component: SortSettingComponent;
  let fixture: ComponentFixture<SortSettingComponent>;
  let mockSortInputService;

  beforeEach(async(() => {
    mockSortInputService = {
      dateClick: jasmine.createSpy('dateClick'),
      viewClick: jasmine.createSpy('viewClick'),
      wordInput: jasmine.createSpy('wordInput'),
    };
    TestBed.configureTestingModule({
      declarations: [SortSettingComponent],
      providers: [
        { provide: SortInputService, useValue: mockSortInputService },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });

  it('click at date', () => {
    const {debugElement} = fixture;
    const dateElement: DebugElement = debugElement.query(By.css('.sort-date'));
    dateElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(mockSortInputService.dateClick).toHaveBeenCalled();
  });

  it('click at view', () => {
    const {debugElement} = fixture;
    const dateElement: DebugElement = debugElement.query(By.css('.sort-count'));
    dateElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(mockSortInputService.viewClick).toHaveBeenCalled();
  });

  it('click at view', () => {
    const {debugElement} = fixture;
    const dateElement: DebugElement = debugElement.query(By.css('.sort-word'));
    dateElement.triggerEventHandler('change', null);
    fixture.detectChanges();
    expect(mockSortInputService.wordInput).toHaveBeenCalled();
  });

});
