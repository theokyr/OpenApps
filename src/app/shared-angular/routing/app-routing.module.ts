import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BulletinBoardComponent} from "../../components/layout/bulletin-board/bulletin-board.component";
import {HomeComponent} from "../../components/layout/home/home.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'announcements', component: BulletinBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
