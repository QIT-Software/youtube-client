import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CoreModule } from './core/core.module';
// import { AuthGuard } from './core/guards/auth.guard';
// import { UserLoginService } from '@authService/user-login.service';
import { HeaderComponent } from './core/components/header/header.component';
import { SortSettingComponent } from './core/components/sort-setting/sort-setting.component';
import { LoginComponent } from './core/components/login/login.component';
import { FailPageComponent } from './core/pages/fail-page/fail-page.component';
// import { ShowSettingService } from '@coreService/show-setting.service';
import { SearchItemComponent } from './youtube/components/search-item/search-item.component';
import { SearchListComponent } from './youtube/pages/search-list/search-list.component';
import { BgColorDateDirective } from './youtube/directives/bg-color-date.directive';
import { SortCardPipe } from './youtube/pipes/sort-card.pipe';
import { FilterCardPipe } from './youtube/pipes/filter-card.pipe';
import { CardPageComponent } from './youtube/pages/card-page/card-page.component';
// import { SortFunctionService } from '@youtubeService/sort-function.service';
// import { DateColorService } from '@youtubeService/date-color.service';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
// import { SearchDataService } from '@coreService/search-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortSettingComponent,
    LoginComponent,
    FailPageComponent,
    SearchItemComponent,
    SearchListComponent,
    BgColorDateDirective,
    SortCardPipe,
    FilterCardPipe,
    CardPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
