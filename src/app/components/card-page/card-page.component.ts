import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '@service/index';
import { IResponseItem, IThumbnailList, IStatistics } from '@model/index';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private searchData: SearchDataService, private route: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {
    this.responseItem = this.searchData.getItem(this.route.snapshot.params.id);
    this.imagesList = this.responseItem.snippet.thumbnails;
    this.image = this.imagesList.standard.url;
    this.stat = this.responseItem.statistics;
    this.title = this.responseItem.snippet.title;
    this.date = new Date(this.responseItem.snippet.publishedAt);
    this.description = this.responseItem.snippet.description;
    console.log(this.responseItem);
  }
  public back(): void {
    this.router.navigate(['/main']);
  }

}
