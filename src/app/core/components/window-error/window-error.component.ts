import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '@coreService/message.service';

@Component({
  selector: 'app-window-error',
  templateUrl: './window-error.component.html',
  styleUrls: ['./window-error.component.scss']
})
export class WindowErrorComponent implements OnInit, OnDestroy {
  public message: string;
  public show: boolean;
  public show1: boolean;

  constructor(private messServe?: MessageService) { }

  public ngOnInit(): void {
    this.messServe.showMessage
      .subscribe((obj: {show: boolean, text?: string, timer?: number}) => {
        if (obj.text) {
          this.message = obj.text;
        }
        this.show = obj.show;
        if (obj.timer) {
          setTimeout(stop, obj.timer );
        } else if (this.show) {
          this.show1 = true;
        } else {
          this.show1 = false;
        }

      });
  }

  public ngOnDestroy(): void {
    this.messServe.showMessage.unsubscribe();
  }

}
