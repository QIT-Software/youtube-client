import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { SortInputService } from '@coreService/sort-input.service';

@Component({
  selector: 'app-sort-setting',
  templateUrl: './sort-setting.component.html',
  styleUrls: ['./sort-setting.component.scss']
})
export class SortSettingComponent implements OnInit {
  @ViewChild('inputWord') public inputWord: ElementRef;
  constructor(private sortInput: SortInputService) { }

  public ngOnInit(): void {
  }
  public sortDate(): void {
    this.sortInput.dateClick();
  }
  public sortViews(): void {
    this.sortInput.viewClick();
  }
  public filterWord(): void {
    this.sortInput.wordInput(this.inputWord.nativeElement.value);
  }
}
