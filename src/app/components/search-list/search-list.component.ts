import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IResponseItem } from '../../models/response-item.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit, OnChanges {
  @Input() public response: IResponseItem[];
  @Input() public sorts: number;
  @Input() public words: string;
  public filter: string;
  public method: number;

  constructor() { }

  public ngOnInit(): void {

  }
  public ngOnChanges() {
    this.method = this.sorts;
    this.filter = this.words;
  }

}
