import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ShowSettingService {
  private show: boolean;

  constructor() {
    this.show = false;
  }
  public hide(): void {
    this.show = false;
  }
  public visible(): void {
    this.show = false;
  }
  public toggle(): boolean {
    this.show = !this.show;
    return this.show;
  }
  public get(): boolean {
    return this.show;
  }
}
