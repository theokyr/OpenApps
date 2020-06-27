import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {CategoriesApiService} from "./categories-api.service";
import {CategoriesListComponent} from './categories-list/categories-list.component';


@NgModule({
  declarations: [CategoriesListComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [
    CategoriesApiService
  ]
})
export class CategoriesModule {
}
