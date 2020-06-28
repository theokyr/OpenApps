import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {CategoriesApiService} from "./categories-api.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [
    CategoriesApiService
  ]
})
export class CategoriesLibModule {
}
