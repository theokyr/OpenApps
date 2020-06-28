import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinBoardComponent } from './bulletin-board/bulletin-board.component';
import {CategoriesViewModule} from "../categories/categories-view.module";
import {AnnouncementsViewModule} from "../announcements/announcements-view.module";



@NgModule({
  declarations: [BulletinBoardComponent],
    imports: [
        CommonModule,
        CategoriesViewModule,
        AnnouncementsViewModule
    ]
})
export class LayoutViewModule { }
