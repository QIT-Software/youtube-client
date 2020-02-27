import { Pipe, PipeTransform } from '@angular/core';
import { IResponseItem } from '../models/response-item.model';

@Pipe({
  name: 'sortCard'
})
export class SortCardPipe implements PipeTransform {
  public transform(listCard: IResponseItem[], method: number): IResponseItem[] {
    let result: IResponseItem[] = listCard.slice();
    if (method === 1) {
      result.sort((a1, a2) => a1.snippet.publishedAt > a2.snippet.publishedAt ? -1 : 1);
    } else if (method === 2) {
      result.sort((a1, a2) => (+a1.statistics.viewCount) > (+a2.statistics.viewCount) ? -1 : 1);
    }
    return result;
  }
}
