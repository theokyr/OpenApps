import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BulletinBoardViewComponent} from "./bulletin-board-view/bulletin-board-view.component";
import {CategoriesViewAngularModule} from "../categories/categories-view-angular.module";
import {AnnouncementsViewAngularModule} from "../announcements/announcements-view-angular.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [BulletinBoardViewComponent],
  imports: [
    CommonModule,
    CategoriesViewAngularModule,
    AnnouncementsViewAngularModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ]
})
export class BulletinBoardAngularModule {
}
