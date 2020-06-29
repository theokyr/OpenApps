import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesLibModule} from "../../lib-angular/categories/categories-lib.module";
import {CategoriesListComponent} from "./categories-list/categories-list.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AppRoutingModule} from "../../shared-angular/routing/app-routing.module";


@NgModule({
  declarations: [CategoriesListComponent],
  exports: [
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CategoriesLibModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule
  ]
})
export class CategoriesViewAngularModule {
}
