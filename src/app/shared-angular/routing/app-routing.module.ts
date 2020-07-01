import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BulletinBoardViewComponent} from "../../view-angular/bulletin-board/bulletin-board-view/bulletin-board-view.component";
import {AuthCallbackComponent} from "../../view-angular/auth/auth-callback/auth-callback.component";
import {UsersListComponent} from "../../view-angular/users/users-list/users-list.component";
import {FeaturesViewListComponent} from "../../view-angular/feature/feature-list-view/view-list/features-view-list.component";


const routes: Routes = [
  {path: '', component: FeaturesViewListComponent},
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
