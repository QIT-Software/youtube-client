import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { SearchListComponent } from './pages/search-list/search-list.component';

const routes: Routes = [
  {path: '', component: SearchListComponent},
  {path: 'card/:id', component: CardPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
