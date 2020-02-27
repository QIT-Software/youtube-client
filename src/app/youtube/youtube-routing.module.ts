import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchListComponent } from '@comp/search-list/search-list.component';
import { CardPageComponent } from '@comp/card-page/card-page.component';

const routes: Routes = [
  {path: '', component: SearchListComponent},
  {path: 'card/:id', component: CardPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
