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
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


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
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    FontAwesomeModule
  ]
})
export class AnnouncementsViewAngularModule {
}
