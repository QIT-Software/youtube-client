import { Component, ViewChild } from '@angular/core';
import { IResponseItem } from './models/response-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'youtube-client';
  public response: IResponseItem[];
  public sorts: number;
  public words: string;
  public save(resp: IResponseItem[]): void {
    this.response = resp;
  }
  public change1(sorts: number): void {
    this.sorts = sorts;
  }
  public change2(words: string): void {
    this.words = words;
  }
}
