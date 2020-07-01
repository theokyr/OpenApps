import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './shared-angular/routing/app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularLibItApiModule} from "./lib-angular/angular-lib-it-api.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BaseItApiService} from "./lib-angular/api/base-it-api.service";
import {environment} from "../environments/environment";
import {ViewAngularModule} from "./view-angular/view-angular.module";
import {LayoutViewAngularModule} from "./view-angular/layout/layout-view-angular.module";

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
    AngularLibItApiModule,
    LayoutViewAngularModule,
    ViewAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    BaseItApiService.setBaseUrl(environment.base_url);
  }
}
