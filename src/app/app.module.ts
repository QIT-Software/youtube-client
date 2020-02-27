import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SortSettingComponent } from './components/sort-setting/sort-setting.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { LoginComponent } from './components/login/login.component';
import { BgColorDateDirective } from './directives/bg-color-date.directive';
import { SortCardPipe } from './pipes/sort-card.pipe';
import { FilterCardPipe } from './pipes/filter-card.pipe';
import { FailPageComponent } from './components/fail-page/fail-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CardPageComponent } from './components/card-page/card-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortSettingComponent,
    SearchItemComponent,
    SearchListComponent,
    LoginComponent,
    BgColorDateDirective,
    SortCardPipe,
    FilterCardPipe,
    FailPageComponent,
    LoginPageComponent,
    CardPageComponent
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
