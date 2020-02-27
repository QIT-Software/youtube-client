import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[colors]'
})
export class BgColorDateDirective implements OnChanges {
  @Input('colors') public dateControl: Date;
  constructor(private elRef?: ElementRef, private render?: Renderer2) { }
  private getColor(): string {
    let now: Date = new Date();
    if (this.dateControl > new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)) {
      return 'blue';
    } else if (this.dateControl > new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())) {
      return 'green';
    } else if (this.dateControl < new Date(now.getFullYear(), now.getMonth() - 6)) {
      return 'red';
    }
  }
  public ngOnChanges(): void {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', this.getColor());
  }
}
