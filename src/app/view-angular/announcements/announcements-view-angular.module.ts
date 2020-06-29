import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {AnnouncementsListComponent} from "./announcements-list/announcements-list.component";
import {AnnouncementsLibModule} from "../../lib-angular/announcements/announcements-lib.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedAngularModule} from "../../shared-angular/shared-angular.module";
import {MatListModule} from "@angular/material/list";
import {MatRippleModule} from "@angular/material/core";
import {AppRoutingModule} from "../../shared-angular/routing/app-routing.module";


@NgModule({
  declarations: [AnnouncementsListComponent],
  exports: [
    AnnouncementsListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedAngularModule,
    AnnouncementsLibModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatRippleModule,
    AppRoutingModule
  ]
})
export class AnnouncementsViewAngularModule {
}
