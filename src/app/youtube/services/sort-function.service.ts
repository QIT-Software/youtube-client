import { Injectable } from '@angular/core';
import { SortInputService } from '@coreService/sort-input.service';
import { IResponseItem, ISortFilter } from '@model/index';
@Injectable()
export class SortFunctionService {
  constructor(private sortInput: SortInputService) { }
  public sorting(listCard: IResponseItem[]): IResponseItem[] {
    let result: IResponseItem[] = listCard.slice();
    let sortFilter: ISortFilter = this.sortInput.getSortMethod();
    if (sortFilter.sortDate) {
      if (sortFilter.sortDate === 1) {
        result.sort((a1, a2) => a1.snippet.publishedAt > a2.snippet.publishedAt ? -1 : 1);
      } else {
        result.sort((a1, a2) => a1.snippet.publishedAt < a2.snippet.publishedAt ? -1 : 1);
      }
    } else if (sortFilter.sortView) {
      if (sortFilter.sortView === 1) {
        result.sort((a1, a2) => (+a1.statistics.viewCount) > (+a2.statistics.viewCount) ? -1 : 1);
      } else {
        result.sort((a1, a2) => (+a1.statistics.viewCount) < (+a2.statistics.viewCount) ? -1 : 1);
      }
    }
    return result;
  }
  public filtering(listCard: IResponseItem[]): IResponseItem[] {
    let result: IResponseItem[] = listCard.slice();
    let sortFilter: ISortFilter = this.sortInput.getSortMethod();
    if (sortFilter.words && sortFilter.words.length) {
      let wordsArray: string[] = sortFilter.words.split(/\s+/);
      result = result.filter((item) => {
        return wordsArray.every((word) => {
          return item.snippet.title.toLowerCase().indexOf(word.toLowerCase()) >= 0;
        });
      });
    }
    return result;
  }
}
