import { Injectable } from '@angular/core';

interface DateAgo {
  days: number;
  r: number;
  g: number;
  b: number;
}
@Injectable()
export class DateColorService {

  private colors: DateAgo[] = [
    { days: 7, r: 0, g: 0, b: 255 },
    { days: 30, r: 0, g: 128, b: 0 },
    { days: 150, r: 255, g: 255, b: 0 },
    { days: 180, r: 47, g: 128, b: 226 },
    { days: 181, r: 255, g: 0, b: 0 },
  ];
  constructor() { }
  public getColor(dateControl: Date): string {
    let arr: number[] = this.getArray(dateControl);
    if (arr.length) {
      return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
    } else { return ''; }
  }
  public getColorAlpha(dateControl: Date): string {
    let arr: number[] = this.getArray(dateControl);
    if (arr.length) {
      return `rgba(${arr[0]}, ${arr[1]}, ${arr[2]}, 0.25)`;
    } else { return ''; }
  }
  public getArray(dateControl: Date): number[] {
    let i: number;
    this.colors.sort((a1, a2) => a1.days - a2.days);
    for (i = 0; i < this.colors.length; i++) {
      let now: Date = new Date();
      now.setDate(now.getDate() - this.colors[i].days);
      if (i === this.colors.length - 1) {
        if (dateControl < now) {
          return [this.colors[i].r, this.colors[i].g, this.colors[i].b];
        }
      } else {
        if (dateControl > now) {
          return [this.colors[i].r, this.colors[i].g, this.colors[i].b];
        }
      }
    }
    return [];
  }
}
