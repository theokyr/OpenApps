import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BulletinBoardViewComponent} from "../../view-angular/bulletin-board/bulletin-board-view/bulletin-board-view.component";
import {HomeComponent} from "../../view-angular/layout/home/home.component";
import {AuthCallbackComponent} from "../../view-angular/auth/auth-callback/auth-callback.component";
import {UsersListComponent} from "../../view-angular/users/users-list/users-list.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'announcements', component: BulletinBoardViewComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'auth/callback', component: AuthCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
