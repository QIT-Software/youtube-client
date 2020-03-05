import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SortSettingComponent } from './components/sort-setting/sort-setting.component';
import { LoginComponent } from './components/login/login.component';
import { FailPageComponent } from './pages/fail-page/fail-page.component';
import { ShowSettingService } from '@coreService/show-setting.service';
import { SortInputService } from '@coreService/sort-input.service';
import { AuthGuard } from './guards/auth.guard';
import { SearchDataService } from '@coreService/search-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestHttpService, BaseUrlInterceptor, AuthTokenInterceptor } from '@coreService/index';
import { UserTokenService } from '@coreService/user-token.service';
import { WindowErrorComponent } from './components/window-error/window-error.component';
import { MessageService } from '@coreService/message.service';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    SortSettingComponent,
    FailPageComponent,
    WindowErrorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    ShowSettingService,
    SortInputService,
    SearchDataService,
    RequestHttpService,
    UserTokenService,
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ],
  exports: [
    HeaderComponent,
    HttpClientModule
  ]
})
export class CoreModule { }
