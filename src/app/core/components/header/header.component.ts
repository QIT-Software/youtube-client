import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ShowSettingService } from '@coreService/show-setting.service';
import { SearchDataService } from '@coreService/search-data.service';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public settingBlock: boolean;
  // public searchWord: string;
  @ViewChild('inputElement') public inputElement: ElementRef;

  constructor(private searchData: SearchDataService, private showBlockSet: ShowSettingService) {
    this.settingBlock = false;
    this.showBlockSet.hide();
  }
  public ngOnInit(): void {
    this.showBlockSet.changeShow.subscribe((val) => {
      this.settingBlock = val ? this.settingBlock : false;
    });
  }

  public ngAfterViewInit(): void {
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(debounceTime(1000), map(() => this.inputElement.nativeElement.value))
      .subscribe((val) => {
        if (!val) {
          this.searchData.clear();
        } else if (val.length > 2) {
          this.searchData.Http(val);
        }
      });
    this.inputElement.nativeElement.focus();
  }

  public showSetting(): void {
    this.settingBlock = this.searchData.getResponseItems().length &&
      this.showBlockSet.get() ? !this.settingBlock : false;
  }
}
