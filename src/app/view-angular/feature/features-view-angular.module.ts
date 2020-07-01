import {AppRoutingModule} from "../../shared-angular/routing/app-routing.module";
import {CategoriesLibModule} from "../../lib-angular/categories/categories-lib.module";
import {CommonModule} from "@angular/common";
import {FeaturesViewCardsComponent} from "./feature-list-view/view-cards/features-view-cards.component";
import {MatCardModule} from "@angular/material/card";
import {NgModule} from "@angular/core";
import {FeaturesViewListComponent} from "./feature-list-view/view-list/features-view-list.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {FeatureComponent} from "./feature.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    FeatureComponent,
    FeaturesViewCardsComponent,
    FeaturesViewListComponent
  ],
  exports: [
    FeatureComponent,
    FeaturesViewCardsComponent,
    FeaturesViewListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CategoriesLibModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    FontAwesomeModule
  ]
})
export class FeaturesViewAngularModule {
}
