import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesLibModule} from "../../lib-angular/categories/categories-lib.module";
import {CategoriesListComponent} from "./categories-list/categories-list.component";



@NgModule({
  declarations: [CategoriesListComponent],
  exports: [
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    CategoriesLibModule
  ]
})
export class CategoriesViewModule { }
