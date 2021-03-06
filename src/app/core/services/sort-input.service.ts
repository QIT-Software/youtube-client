import { Injectable } from '@angular/core';
import { ISortFilter } from '@model/index';

@Injectable()
export class SortInputService {
  public sorts: ISortFilter;

  constructor() {
    this.sorts = {words: '', sortDate: 0, sortView: 0};
  }
  public dateClick(): void {
    this.sorts.sortDate = ++this.sorts.sortDate > 2 ? 0 : this.sorts.sortDate;
    this.sorts.sortView = 0;
  }
  public viewClick(): void {
    this.sorts.sortDate = 0;
    this.sorts.sortView = ++this.sorts.sortView > 2 ? 0 : this.sorts.sortView;
  }
  public wordInput(word: string): void {
    this.sorts.words = word;
  }
  public getSortMethod(): ISortFilter {
    return this.sorts;
  }
}
