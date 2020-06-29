import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AppRoutingModule} from "../../shared-angular/routing/app-routing.module";
import {UsersListComponent} from "./users-list/users-list.component";
import {UsersLibModule} from "../../lib-angular/users/users-lib.module";
import {MatListModule} from "@angular/material/list";
import {MatRippleModule} from "@angular/material/core";


@NgModule({
  declarations: [UsersListComponent],
  exports: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    UsersLibModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    MatListModule,
    MatRippleModule
  ]
})
export class UsersViewAngularModule {
}
