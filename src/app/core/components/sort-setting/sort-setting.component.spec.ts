import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortSettingComponent } from './sort-setting.component';

describe('SortSettingComponent", () => {
  let component: SortSettingComponent;
  let fixture: ComponentFixture<SortSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create", () => {
    expect(component).toBeTruthy();
  });
});
