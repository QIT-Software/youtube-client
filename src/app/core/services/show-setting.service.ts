import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ShowSettingService {
  private canShow: boolean;
  public changeShow: Subject<boolean> = new Subject();

  constructor() {
    this.canShow = false;
  }
  public change(): void {
    this.changeShow.next(this.canShow);
  }
  public hide(): void {
    this.canShow = false;
    this.change();
  }
  public visible(): void {
    this.canShow = true;
    this.change();
  }

  public get(): boolean {
    return this.canShow;
  }
}
