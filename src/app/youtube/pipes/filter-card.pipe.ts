import { Pipe, PipeTransform } from '@angular/core';
import { SortFunctionService } from '@youtubeService/sort-function.service';
import { IResponseItem } from '@model/response-item.model';

@Pipe({
  name: 'filterCard'
})
export class FilterCardPipe implements PipeTransform {
  constructor(private sort?: SortFunctionService) { }
  public transform(listCard: IResponseItem[]): IResponseItem[] {
    return this.sort.filtering(listCard);
  }
}
