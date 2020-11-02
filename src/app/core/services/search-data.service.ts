import { Injectable } from '@angular/core';
import { IResponse, IResponseItem } from '@model/index';
import { Subject, EMPTY, ReplaySubject } from 'rxjs';
import { RequestHttpService } from './request-http.service';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable()
export class SearchDataService {
  public response: IResponse;
  public loadData: ReplaySubject<IResponseItem[]> = new ReplaySubject();
  public searchWord: string;
  public nextToken: string;
  public canNextRequest: boolean;
  public nowNext: boolean;

  constructor(private reqHttp?: RequestHttpService, private mess?: MessageService) { }

  public getResponse(): IResponse {
    return this.response;
  }
  public getResponseItems(): IResponseItem[] {
    return this.response ? this.response.items : [];
  }

  public setResponse(resp: IResponse): void {
    this.response = resp;
  }

  public nextHttp(): void {
    this.Http(this.searchWord, true);
  }

  public Http(word: string, next?: boolean): void {
    this.nowNext = next;
    this.searchWord = word;
    this.mess.showUp('Loading...');
    this.reqHttp.getList(word, next && this.canNextRequest ? this.nextToken : '').pipe(catchError(() => {
      this.mess.showTimer('Request error');
      return EMPTY;
    }))
      .subscribe((val: IResponse) => {
        if (val && val.items.length) {
          this.canNextRequest = 'nextPageToken' in val;
          this.nextToken = val.nextPageToken ? val.nextPageToken : '';
          let listId: string = val.items
            .map((x) => typeof x.id === 'string' ? x.id : x.id.videoId).join();
          this.HttpSecond(listId);
        } else {
          this.clear();
          this.mess.showTimer('Result is empty');
        }
      });
  }

  public HttpSecond(listId: string): void {
    this.reqHttp.getListStat(listId).pipe(catchError(() => {
      this.mess.showTimer('Request error');
      return EMPTY;
    }))
      .subscribe((newVal: IResponse) => {
        if (this.nowNext) {
          this.addResponse(newVal);
        } else {
          this.setResponse(newVal);
        }
        this.changeResponse();
        this.mess.hide();
      });
  }

  public addResponse(add: IResponse): void {
    let list: IResponseItem[] = add.items;
    this.response.items.push(...list);
  }

  public clear(): void {
    this.nextToken = '';
    this.canNextRequest = false;
    this.nowNext = false;
    this.setResponse(null);
    this.changeResponse();

  }

  public changeResponse(): void {
    this.loadData.next(this.getResponseItems());
  }

  public getItem(id: string): IResponseItem {
    return this.getResponseItems().find(item => typeof item.id === 'string'
      ? item.id === id : item.id.videoId === id);
  }
}
