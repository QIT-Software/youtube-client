import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class RequestHttpService {
  private YOUTUBE_URL: string = 'search';
  private YOUTUBE_URL1: string = 'videos';
  private TYPE: string = 'video';
  private PART: string = 'snippet';
  private PART1: string = 'snippet,statistics';
  private MAX_RESULTS: string = '12';

  constructor(private http?: HttpClient) { }

  public getToken(username: string, password: string): Observable<unknown> {
    return of(`XXX-token:${username}&${password}`).pipe(delay(2000));
  }

  public getList(word: string, nextToken?: string): Observable<unknown> {
    let params: HttpParams;
    params = new HttpParams()
    .set('type', this.TYPE)
    .set('part', this.PART)
    .set('maxResults', this.MAX_RESULTS)
    .set('q', word);
    if (nextToken) {
      params = params.set('pageToken', nextToken);
    }
    return this.http.get(this.YOUTUBE_URL, { params });
  }

  public getListStat(ids: string): Observable<unknown> {
    let params: HttpParams = new HttpParams()
      .set('id', ids)
      .set('part', this.PART1);
    return this.http.get(this.YOUTUBE_URL1, { params });
  }
}
