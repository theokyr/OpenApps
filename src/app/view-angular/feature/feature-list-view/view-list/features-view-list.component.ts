import {Component, OnInit} from '@angular/core';
import {FeatureData} from "../../../../shared/feature-data";
import {ApiFeature} from "../../../../shared/api-feature.model";
import {ApiFeatureCategoryModel} from "../../../../shared/api-feature-category.model";
import {AuthApiFactoryService} from "../../../../lib-angular/auth/auth-api-factory.service";
import {ApiFeatureStateModel} from "../../../../shared/api-feature-state.model";

@Component({
  selector: 'app-view-list',
  templateUrl: './features-view-list.component.html',
  styleUrls: ['./features-view-list.component.scss']
})
export class FeaturesViewListComponent implements OnInit {

  categories: ApiFeatureCategoryModel[];
  featureSignIn: ApiFeature;
  featureSignOut: ApiFeature;
  isAuthenticated: boolean;

  constructor(public authFactory: AuthApiFactoryService) {
    this.authFactory.service.isAuthenticated().subscribe(value => {
      console.log(`[FeaturesViewListComponent] New value! ${value}`)
      this.isAuthenticated = value;
    });
  }

  ngOnInit(): void {
    this.categories = FeatureData.categories;
    this.featureSignIn = FeatureData.featureSignIn;
    this.featureSignOut = FeatureData.featureSignOut;
  }

  public shouldShowFeature(state: ApiFeatureStateModel) {
    if (this.isAuthenticated && state == ApiFeatureStateModel.SignedOut) {
      return false;
    } else if (!this.isAuthenticated && state == ApiFeatureStateModel.SignedIn) {
      return false;
    }
    return true;
  }

}
