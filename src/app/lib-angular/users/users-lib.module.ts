import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {UsersApiService} from "./users-api.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [
    UsersApiService
  ]
})
export class UsersLibModule {
}
