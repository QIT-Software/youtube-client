import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { IResponseItem } from '@model/index';
import { SearchDataService } from '@coreService/search-data.service';
import { ShowSettingService } from '@coreService/index';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit, OnChanges, OnDestroy {
  public response: IResponseItem[];
  public showNext: boolean = false;

  constructor(private searchData?: SearchDataService, private showBlockSet?: ShowSettingService) {
    this.response = this.searchData.getResponseItems();
    this.showBlockSet.visible();
  }
  public ngOnInit(): void {
    this.searchData.loadData.subscribe((data: IResponseItem[]) => {
      this.response = data;
      this.showNext = this.searchData.canNextRequest;
    });
  }
  public ngOnChanges(): void {
    this.response = this.searchData.getResponseItems();
  }

  public next(): void {
    this.searchData.nextHttp();
  }

  public ngOnDestroy(): void {
    this.showBlockSet.hide();
    // this.searchData.loadData.unsubscribe();
  }
}
