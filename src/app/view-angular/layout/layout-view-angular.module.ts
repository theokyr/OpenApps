import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesViewAngularModule} from "../categories/categories-view-angular.module";
import {AnnouncementsViewAngularModule} from "../announcements/announcements-view-angular.module";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatRippleModule} from "@angular/material/core";
import {AppRoutingModule} from "../../shared-angular/routing/app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CategoriesViewAngularModule,
    AnnouncementsViewAngularModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatRippleModule,
    MatButtonModule,
    FontAwesomeModule,
    MatDividerModule
  ]
})
export class LayoutViewAngularModule {
}
