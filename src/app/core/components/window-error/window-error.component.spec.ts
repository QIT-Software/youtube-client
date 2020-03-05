import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowErrorComponent } from './window-error.component';
import { MessageService } from '@coreService/message.service';

describe('WindowErrorComponent', () => {
  let component: WindowErrorComponent;
  let fixture: ComponentFixture<WindowErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowErrorComponent ],
      providers: [MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
