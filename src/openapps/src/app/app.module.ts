import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LibAppsModule} from "./lib-angular/lib-apps.module";
import {CategoriesViewModule} from "./components/categories/categories-view.module";
import {LayoutViewModule} from "./components/layout/layout-view.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {TruncatePipeDirective} from "./shared-angular/truncate-pipe.directive";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LibAppsModule,
    CategoriesViewModule,
    LayoutViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
