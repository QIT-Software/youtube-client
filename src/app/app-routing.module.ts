import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FailPageComponent } from './core/pages/fail-page/fail-page.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadChildren: () => import('./youtube/youtube.module')
            .then(m => m.YoutubeModule), canLoad: [AuthGuard]},
  {path: 'login', loadChildren: () => import('./auth/auth.module')
            .then(m => m.AuthModule)},
  {path: '**', component: FailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
