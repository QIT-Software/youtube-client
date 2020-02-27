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
import { UserLoginService } from '@coreService/user-login.service';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    SortSettingComponent,
    FailPageComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    ShowSettingService,
    SortInputService,
    SearchDataService,
    UserLoginService
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
