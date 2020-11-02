import { Pipe, PipeTransform } from '@angular/core';
import { SortFunctionService } from '@youtubeService/sort-function.service';
import { IResponseItem } from '@model/index';

@Pipe({
  name: 'sortCard',
  pure: false
})
export class SortCardPipe implements PipeTransform {
  constructor(private sort: SortFunctionService) { }
  public transform(listCard: IResponseItem[]): IResponseItem[] {
    return this.sort.sorting(listCard);
  }
}
