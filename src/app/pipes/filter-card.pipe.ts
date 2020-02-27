import { Pipe, PipeTransform } from '@angular/core';
import { IResponseItem } from '../models/response-item.model';

@Pipe({
  name: 'filterCard'
})
export class FilterCardPipe implements PipeTransform {

  public transform(listCard: IResponseItem[], words: string): IResponseItem[] {
    let result: IResponseItem[] = listCard.slice();
    if (words && words.length > 0) {
      let wordsArray: string[] = words.split(/\s+/);
      result = result.filter((item) => {
        return wordsArray.every((word) => {
          return item.snippet.title.toLowerCase().indexOf(word.toLowerCase()) >= 0;
        });
      });
    }
    return result;
  }
}
