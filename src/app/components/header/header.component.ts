import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { IResponse, IResponseItem } from '@model/index';
import { SearchDataService, ShowSettingService } from '@service/index';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public settingBlock: boolean;
  public searchWord: string;
  @ViewChild('inputElement') public inputElement: ElementRef;

  constructor(private searchData: SearchDataService, private showBlockSet: ShowSettingService) {
    this.settingBlock = this.showBlockSet.get();
  }
  public ngOnInit(): void {
  }
  public showSetting(): void {
    this.settingBlock = this.searchData.getResponse() ? this.showBlockSet.toggle() : false;
  }
  public search(): void {
    this.searchWord = this.inputElement.nativeElement.value;
    if (this.searchWord) {
      this.searchData.mockHttp();
    } else {
      this.searchData.clear();
    }
  }
}
