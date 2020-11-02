import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';
import { DateColorService } from '@youtubeService/date-color.service';

@Directive({
  selector: '[shadow]'
})
export class ShadowDateDirective implements OnChanges {
  @Input('shadow') public date: Date;
  constructor(private dateColor?: DateColorService,
              private elRef?: ElementRef,
              private render?: Renderer2) { }
  public ngOnChanges(): void {
    this.render.setStyle(
      this.elRef.nativeElement,
      'box-shadow', `5px 10px 10px ${this.dateColor.getColorAlpha(this.date)}`);
  }
}
