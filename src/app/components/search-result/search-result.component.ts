import { Component, OnInit } from '@angular/core';
import { IResponse } from '../../models/response.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  public response: IResponse;
  constructor() { }

  public ngOnInit(): void {
  }

}
