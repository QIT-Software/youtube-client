import { TestBed } from '@angular/core/testing';

import { SortFunctionService } from './sort-function.service';
import { YoutubeModule } from '../youtube.module';
import { CoreModule } from 'src/app/core/core.module';
import { SortInputService } from '@coreService/index';
import { ISortFilter, IResponseItem } from '@model/index';

describe('SortFunctionService', () => {
  let service: SortFunctionService;
  let service2: SortInputService;
  let mockSortInputService: unknown;
  let methodsExample: number;

  beforeEach(() => {
    mockSortInputService  = {
      sorts: {words: '', sortDate: 1, sortView: 0},
      getSortMethod(): ISortFilter {
          return this.sorts;
      },
    }
    TestBed.configureTestingModule({
      providers: [
        SortFunctionService,
        { provide: SortInputService, useValue: mockSortInputService },

      ]
    });
    service = TestBed.inject(SortFunctionService);
    service2 = TestBed.inject(SortInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sort of date - [0] is last', () => {
    let listCard: IResponseItem[] = [
      {id: '1', snippet: {publishedAt: '2019'}},
      {id: '2', snippet: {publishedAt: '2018'}},
      {id: '3', snippet: {publishedAt: '2020'}}
    ] as IResponseItem[];
    expect(service.sorting(listCard).map(x => x.id).join('')).toEqual('312');
  });

  it('should sort of date - [0] is old', () => {
    service2.sorts = {words: '', sortDate: 2, sortView: 0};
    let listCard: IResponseItem[] = [
      {id: '1', snippet: {publishedAt: '2019'}},
      {id: '2', snippet: {publishedAt: '2018'}},
      {id: '3', snippet: {publishedAt: '2020'}}
    ] as IResponseItem[];
    expect(service.sorting(listCard).map(x => x.id).join('')).toEqual('213');
  });

  it('should sort of count - [0] is big', () => {
    service2.sorts = {words: '', sortDate: 0, sortView: 1};
    let listCard: IResponseItem[] = [
      {id: '1', statistics: {viewCount: '2019'}},
      {id: '2', statistics: {viewCount: '2018'}},
      {id: '3', statistics: {viewCount: '2020'}}
    ] as IResponseItem[];
    expect(service.sorting(listCard).map(x => x.id).join('')).toEqual('312');
  });

  it('should sort of count - [0] is little', () => {
    service2.sorts = {words: '', sortDate: 0, sortView: 2};
    let listCard: IResponseItem[] = [
      {id: '1', statistics: {viewCount: '2019'}},
      {id: '2', statistics: {viewCount: '2018'}},
      {id: '3', statistics: {viewCount: '2020'}}
    ] as IResponseItem[];
    expect(service.sorting(listCard).map(x => x.id).join('')).toEqual('213');
  });

  it('should filter title', () => {
    service2.sorts = {words: 'abc de', sortDate: 0, sortView: 0};
    let listCard: IResponseItem[] = [
      {id: '1', snippet: {title: 'AbC ui De'}},
      {id: '2', snippet: {title: 'FgH De'}},
      {id: '3', snippet: {title: ' De AbC'}}
    ] as IResponseItem[];
    expect(service.filtering(listCard).map(x => x.id).join('')).toEqual('13');
  });
});
