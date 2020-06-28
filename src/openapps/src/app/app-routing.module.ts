import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BulletinBoardComponent} from "./components/layout/bulletin-board/bulletin-board.component";


const routes: Routes = [
  { path: '', component: BulletinBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
