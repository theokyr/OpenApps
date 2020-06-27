import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoriesLibModule} from "./lib-angular/categories/categories-lib.module";
import {LibAppsModule} from "./lib-angular/lib-apps.module";
import {CategoriesViewModule} from "./components/categories/categories-view.module";
import {LayoutViewModule} from "./components/layout/layout-view.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LibAppsModule,
    CategoriesLibModule,
    CategoriesViewModule,
    LayoutViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
