import { Component, OnInit } from '@angular/core';
import { IResponse } from '../../models/response.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  public response: IResponse;
  constructor() { }

  public ngOnInit(): void {
  }

}
