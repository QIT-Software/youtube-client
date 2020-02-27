import { Injectable } from '@angular/core';
import { IResponse, IResponseItem } from '@model/index';
import { dataResponse } from '@comp/header/data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  public response: IResponse;
  public loadData: any = new Subject();

  constructor() { }
  public getResponse(): IResponse {
    return this.response;
  }
  public getResponseItems(): IResponseItem[] {
    return this.response ? this.response.items : [];
  }
  public setResponse(resp: IResponse): void {
    this.response = resp;

  }
  public mockHttp(): void {
    this.setResponse(dataResponse);

    this.loadData.next(this.getResponseItems());
  }
  public clear(): void {
    this.setResponse(null);
    this.loadData.next(this.getResponseItems());
  }
  public getItem(id: string): IResponseItem {
    return this.getResponseItems().find(item => item.id === id);
  }
}
