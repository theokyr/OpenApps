import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BulletinBoardComponent} from "../../components/bulletin-board/bulletin-board.component";
import {HomeComponent} from "../../components/layout/home/home.component";
import {AuthCallbackComponent} from "../../components/auth/auth-callback/auth-callback.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'announcements', component: BulletinBoardComponent},
  {path: 'auth/callback', component: AuthCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
