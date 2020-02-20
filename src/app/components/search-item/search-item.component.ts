import { Component, OnInit, Input } from '@angular/core';
import { IResponseItem, IThumbnailList, IStatistics } from '../../models/response-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() public responseItem: IResponseItem;
  public imagesList: IThumbnailList;
  public stat: IStatistics;
  public image: string;
  public title: string;
  public date: Date;
  public color: string;
  constructor() { }

  public ngOnInit(): void {
    this.imagesList = this.responseItem.snippet.thumbnails;
    this.image = this.imagesList.medium.url;
    this.stat = this.responseItem.statistics;
    this.title = this.responseItem.snippet.title;
    this.date = new Date(this.responseItem.snippet.publishedAt);
  }
}
