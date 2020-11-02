import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IResponseItem, IThumbnailList, IStatistics } from '@model/index';

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
  constructor(private router?: Router) {
   }

  public ngOnInit(): void {
    this.imagesList = this.responseItem.snippet.thumbnails;
    this.stat = {} as IStatistics;

    if ('maxres' in this.imagesList) {
      this.image = this.imagesList.maxres.url;
    } else if ('standard' in this.imagesList) {
      this.image = this.imagesList.standard.url;
    } else if ('high' in this.imagesList) {
      this.image = this.imagesList.high.url;
    } else if ('medium' in this.imagesList) {
      this.image = this.imagesList.medium.url;
    } else {
      this.image = this.imagesList.default.url;
    }
    this.stat = 'statistics' in this.responseItem ? this.responseItem.statistics : this.stat;
    this.title = this.responseItem.snippet.title;
    this.date = new Date(this.responseItem.snippet.publishedAt);
  }
  public info(): void {
    let id: string = typeof this.responseItem.id === 'string'
          ? this.responseItem.id : this.responseItem.id.videoId;
    this.router.navigate(['/main/card', id]);
  }
}
