import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IResponseItem, IThumbnailList, IStatistics } from '@model/index';
import { SearchDataService } from '@coreService/search-data.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {
  public responseItem: IResponseItem;
  public imagesList: IThumbnailList;
  public stat: IStatistics;
  public image: string;
  public title: string;
  public date: Date;
  public color: string;
  public description: string;
  public id: string;

  constructor(private searchData: SearchDataService, private route: ActivatedRoute,
              private router: Router) { }

  public ngOnInit(): void {
    this.stat = {} as IStatistics;
    this.responseItem = this.searchData.getItem(this.route.snapshot.params.id);
    this.imagesList = this.responseItem.snippet.thumbnails;
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
    this.description = this.responseItem.snippet.description;
    this.id = typeof this.responseItem.id === 'string'
          ? this.responseItem.id : this.responseItem.id.videoId;
  }
  public back(): void {
    this.router.navigate(['/main']);
  }
  public video(): void {
    window.open(`https://www.youtube.com/watch?v=${this.id}`);
  }

}
