import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationViewAngularModule} from "./auth/authentication-view-angular.module";
import {BulletinBoardAngularModule} from "./bulletin-board/bulletin-board-angular.module";
import {LayoutViewAngularModule} from "./layout/layout-view-angular.module";
import {CategoriesViewAngularModule} from "./categories/categories-view-angular.module";
import {UsersViewAngularModule} from "./users/users-view-angular.module";
import {FeaturesViewAngularModule} from "./feature/features-view-angular.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationViewAngularModule,
    BulletinBoardAngularModule,
    LayoutViewAngularModule,
    CategoriesViewAngularModule,
    UsersViewAngularModule,
    FeaturesViewAngularModule
  ]
})
export class ViewAngularModule {
}
