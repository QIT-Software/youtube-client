import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchListComponent } from './pages/search-list/search-list.component';
import { BgColorDateDirective } from './directives/bg-color-date.directive';
import { SortCardPipe } from './pipes/sort-card.pipe';
import { FilterCardPipe } from './pipes/filter-card.pipe';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { DateColorService } from '@youtubeService/date-color.service';
import { SortFunctionService } from '@youtubeService/sort-function.service';
import { ShadowDateDirective } from './directives/shadow-date.directive';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchListComponent,
    BgColorDateDirective,
    SortCardPipe,
    FilterCardPipe,
    CardPageComponent,
    ShadowDateDirective,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ],
  providers: [
    DateColorService,
    SortFunctionService
  ]
})
export class YoutubeModule { }
