import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './shared-angular/routing/app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LibItApiModule} from "./lib-angular/lib-it-api.module";
import {CategoriesViewModule} from "./components/categories/categories-view.module";
import {LayoutViewModule} from "./components/layout/layout-view.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BaseItApiService} from "./lib-angular/api/base-it-api.service";
import {environment} from "../environments/environment";
import {BulletinBoardViewModule} from "./components/bulletin-board/bulletin-board-view.module";
import {AuthenticationViewModuleModule} from "./components/auth/authentication-view-module.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FlexLayoutModule,
    LibItApiModule,
    AuthenticationViewModuleModule,
    BulletinBoardViewModule,
    LayoutViewModule,
    CategoriesViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    BaseItApiService.setBaseUrl(environment.base_url);
  }
}
