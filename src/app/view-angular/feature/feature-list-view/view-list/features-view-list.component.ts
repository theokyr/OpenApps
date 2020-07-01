import {Component, OnInit} from '@angular/core';
import {FeatureData} from "../../../../shared/feature-data";
import {ApiFeature} from "../../../../shared/api-feature.model";
import {ApiFeatureCategoryModel} from "../../../../shared/api-feature-category.model";

@Component({
  selector: 'app-view-list',
  templateUrl: './features-view-list.component.html',
  styleUrls: ['./features-view-list.component.scss']
})
export class FeaturesViewListComponent implements OnInit {

  categories: ApiFeatureCategoryModel[];
  featureSignIn: ApiFeature;
  featureSignOut: ApiFeature;

  constructor() {
  }

  ngOnInit(): void {
    this.categories = FeatureData.categories;
    this.featureSignIn = FeatureData.featureSignIn;
    this.featureSignOut = FeatureData.featureSignOut;
  }

}
