import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-setting',
  templateUrl: './sort-setting.component.html',
  styleUrls: ['./sort-setting.component.scss']
})
export class SortSettingComponent implements OnInit {
  public sortOf: number;
  public words: string;
  @ViewChild('inputWord') public inputWord: ElementRef;
  @Output() public sortCard: EventEmitter<number> = new EventEmitter();
  @Output() public filterCard: EventEmitter<string> = new EventEmitter();
  constructor() { }

  public ngOnInit(): void {
  }
  public sortDate(): void {
    this.sortOf = 1;
    this.sortCard.emit(this.sortOf);
  }
  public sortViews(): void {
    this.sortOf = 2;
    this.sortCard.emit(this.sortOf);
  }
  public filterWord(): void {
    this.words = this.inputWord.nativeElement.value;
    this.filterCard.emit(this.words);
  }

}
