import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {BaseItApiService} from "./api/base-it-api.service";
import {AnnouncementsLibModule} from "./announcements/announcements-lib.module";
import {CategoriesLibModule} from "./categories/categories-lib.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AnnouncementsLibModule,
    CategoriesLibModule
  ],
  providers: [
    BaseItApiService
  ]
})
export class LibItApiModule {
}