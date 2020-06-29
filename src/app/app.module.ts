import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './shared-angular/routing/app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LibItApiModule} from "./lib-angular/lib-it-api.module";
import {CategoriesViewAngularModule} from "./view-angular/categories/categories-view-angular.module";
import {LayoutViewAngularModule} from "./view-angular/layout/layout-view-angular.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BaseItApiService} from "./lib-angular/api/base-it-api.service";
import {environment} from "../environments/environment";
import {BulletinBoardAngularModule} from "./view-angular/bulletin-board/bulletin-board-angular.module";
import {AuthenticationViewAngularModule} from "./view-angular/auth/authentication-view-angular.module";
import { UsersListComponent } from './view-angular/users/users-list/users-list.component';
import {UsersViewAngularModule} from "./view-angular/users/users-view-angular.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FlexLayoutModule,
    LibItApiModule,
    AuthenticationViewAngularModule,
    BulletinBoardAngularModule,
    LayoutViewAngularModule,
    CategoriesViewAngularModule,
    UsersViewAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    BaseItApiService.setBaseUrl(environment.base_url);
  }
}
