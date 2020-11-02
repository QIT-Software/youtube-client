import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';
import { DateColorService } from '@youtubeService/date-color.service';
@Directive({
  selector: '[colors]'
})
export class BgColorDateDirective implements OnChanges {
  @Input('colors') public date: Date;
  constructor(private dateColor: DateColorService, private elRef?: ElementRef, private render?: Renderer2) { }
  public ngOnChanges(): void {
    this.render.setStyle(this.elRef.nativeElement, 'background-color',
                         this.dateColor.getColor(this.date));
  }
}
