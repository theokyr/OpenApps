import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinBoardComponent } from './bulletin-board/bulletin-board.component';
import {CategoriesViewModule} from "../categories/categories-view.module";
import {AnnouncementsViewModule} from "../announcements/announcements-view.module";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatRippleModule} from "@angular/material/core";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [BulletinBoardComponent, HomeComponent, HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CategoriesViewModule,
    AnnouncementsViewModule,
    FlexLayoutModule,
    MatCardModule,
    MatRippleModule,
    AppRoutingModule
  ]
})
export class LayoutViewModule { }
