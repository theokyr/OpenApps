import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BulletinBoardViewComponent} from "../../view-angular/bulletin-board/bulletin-board-view/bulletin-board-view.component";
import {HomeComponent} from "../../view-angular/layout/home/home.component";
import {AuthCallbackComponent} from "../../view-angular/auth/auth-callback/auth-callback.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'announcements', component: BulletinBoardViewComponent},
  {path: 'auth/callback', component: AuthCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
