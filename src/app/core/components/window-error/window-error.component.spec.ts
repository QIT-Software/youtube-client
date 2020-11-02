import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowErrorComponent } from './window-error.component';
import { MessageService } from '@coreService/message.service';
import { of, Subject } from 'rxjs';

describe('WindowErrorComponent', () => {
  let component: WindowErrorComponent;
  let fixture: ComponentFixture<WindowErrorComponent>;
  let mockMessageService: unknown;
  let service: MessageService;

  beforeEach(async(() => {
    mockMessageService = {
      showMessage: new Subject<{show: boolean, text?: string, timer?: number}>(),
      show(show: boolean, text?: string, timer?: number): void {
        this.showMessage.next({show, text, timer});
      },
      showTimer(text: string): void {
        this.show(true, text, 3000);
      },
      showUp(text: string): void {
        this.show(true, text);
      },
      hide(): void {
        this.show(false);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ WindowErrorComponent ],
      providers: [
        { provide: MessageService, useValue: mockMessageService },
      ]
    })
    .compileComponents();
    service = TestBed.inject(MessageService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show window with timeout', () => {
    service.showTimer('text');
    expect(component).toBeTruthy();
  });

  it('should show window and hide', () => {
    service.showUp('text');
    service.hide();
    expect(component).toBeTruthy();
  });

});
