import {Component, OnInit} from '@angular/core';
import {FeatureData} from "../../../../shared/feature-data";
import {ApiFeature} from "../../../../shared/api-feature.model";
import {ApiFeatureCategoryModel} from "../../../../shared/api-feature-category.model";

@Component({
  selector: 'app-home',
  templateUrl: './features-view-cards.component.html',
  styleUrls: ['./features-view-cards.component.scss']
})
export class FeaturesViewCardsComponent implements OnInit {

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
