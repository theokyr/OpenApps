import {AppRoutingModule} from "../../shared-angular/routing/app-routing.module";
import {CategoriesLibModule} from "../../lib-angular/categories/categories-lib.module";
import {CommonModule} from "@angular/common";
import {FeaturesViewCardsComponent} from "./feature-list-view/view-cards/features-view-cards.component";
import {MatCardModule} from "@angular/material/card";
import {NgModule} from "@angular/core";
import {FeaturesViewListComponent} from "./feature-list-view/view-list/features-view-list.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {FeatureViewCardComponent} from "./feature-view/feature-card/feature-view-card.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FeatureViewListItemComponent} from './feature-view/view-list-item/feature-view-list-item.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatRippleModule} from "@angular/material/core";

@NgModule({
  declarations: [
    FeatureViewCardComponent,
    FeaturesViewCardsComponent,
    FeaturesViewListComponent,
    FeatureViewListItemComponent,
    FeatureViewCardComponent
  ],
  exports: [
    FeatureViewCardComponent,
    FeaturesViewCardsComponent,
    FeaturesViewListComponent,
    FeatureViewListItemComponent,
    FeatureViewCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CategoriesLibModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatRippleModule
  ]
})
export class FeaturesViewAngularModule {
}
