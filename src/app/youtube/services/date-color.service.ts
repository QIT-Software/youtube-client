import { Injectable } from '@angular/core';

interface DateAgo {
  days: number;
  color: string;
}
@Injectable()
export class DateColorService {
  private colors: DateAgo[] = [
    {days: 7, color: 'blue'},
    {days: 30, color: 'green'},
    {days: 180, color: 'red'},
  ];
  constructor() { }
  public getColor(dateControl: Date ): string {
    let i: number;
    this.colors.sort((a1, a2) => a1.days - a2.days);
    for (i = 0; i < this.colors.length; i++) {
      let now: Date = new Date();
      now.setDate(now.getDate() - this.colors[i].days);
      if (i === this.colors.length - 1) {
        if (dateControl < now) {
          return this.colors[i].color;
        }
      } else {
        if (dateControl > now) {
          return this.colors[i].color;
        }
      }
    }
    return '';
  }
}
