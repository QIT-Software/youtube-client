import { Pipe, PipeTransform } from '@angular/core';
import { IResponseItem } from '../models/response-item.model';
import { SortFunctionService } from '@service/index';

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
