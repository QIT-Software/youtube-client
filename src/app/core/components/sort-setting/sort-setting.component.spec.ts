import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortSettingComponent } from './sort-setting.component';
import { CoreModule } from '../../core.module';
import { SortInputService } from '@coreService/sort-input.service';

describe('SortSettingComponent', () => {
  let component: SortSettingComponent;
  let fixture: ComponentFixture<SortSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortSettingComponent],
      providers: [SortInputService],
      imports: [CoreModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
