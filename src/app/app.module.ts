import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SortSettingComponent } from './components/sort-setting/sort-setting.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { LoginComponent } from './components/login/login.component';
import { BgColorDateDirective } from './directives/bg-color-date.directive';
import { SortCardPipe } from './pipes/sort-card.pipe';
import { FilterCardPipe } from './pipes/filter-card.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortSettingComponent,
    SearchItemComponent,
    SearchListComponent,
    SearchResultComponent,
    LoginComponent,
    BgColorDateDirective,
    SortCardPipe,
    FilterCardPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
