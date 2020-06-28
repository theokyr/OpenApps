import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BulletinBoardComponent} from "./bulletin-board.component";
import {CategoriesViewModule} from "../categories/categories-view.module";
import {AnnouncementsViewModule} from "../announcements/announcements-view.module";
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [BulletinBoardComponent],
  imports: [
    CommonModule,
    CategoriesViewModule,
    AnnouncementsViewModule,
    FlexLayoutModule
  ]
})
export class BulletinBoardViewModule { }
