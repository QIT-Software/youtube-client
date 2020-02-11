import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SortSettingComponent } from './components/sort-setting/sort-setting.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortSettingComponent,
    SearchItemComponent,
    SearchListComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
