import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MessageService {
  public showMessage: Subject<{ show: boolean, text?: string, timer?: number }> = new Subject();

  constructor() { }

  private show(show: boolean, text?: string, timer?: number): void {
    this.showMessage.next({show, text, timer});
  }

  public showTimer(text: string): void {
    this.show(true, text, 3000);
  }
  public showUp(text: string): void {
    this.show(true, text);
  }
  public hide(): void {
    this.show(false);
  }
}
