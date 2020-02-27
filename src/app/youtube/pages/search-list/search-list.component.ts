import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IResponseItem } from '@model/index';
import { SearchDataService } from '@coreService/search-data.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit, OnChanges {
  public response: IResponseItem[];

  constructor(private searchData: SearchDataService) {
    this.response = this.searchData.getResponseItems();
  }
  public ngOnInit(): void {
    this.searchData.loadData.subscribe((data: IResponseItem[]) => {
      this.response = data;
    });
  }
  public ngOnChanges(): void {
    this.response = this.searchData.getResponseItems();
  }
}
