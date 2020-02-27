import { Component, OnInit, Input } from '@angular/core';
import { IResponseItem } from '../../models/response-item.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() public response: IResponseItem[];
  @Input() public sorts: number;
  @Input() public words: string;
  constructor() { }

  public ngOnInit(): void {
  }

}
