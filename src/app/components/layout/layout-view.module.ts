import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesViewModule} from "../categories/categories-view.module";
import {AnnouncementsViewModule} from "../announcements/announcements-view.module";
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatRippleModule} from "@angular/material/core";
import {AppRoutingModule} from "../../shared-angular/routing/app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FeatureComponent} from './feature/feature.component';
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, FeatureComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CategoriesViewModule,
    AnnouncementsViewModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatRippleModule,
    MatButtonModule,
    FontAwesomeModule,
    MatDividerModule
  ]
})
export class LayoutViewModule {
}
