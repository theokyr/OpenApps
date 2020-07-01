import {Component, OnInit} from '@angular/core';
import {FeatureData} from "../../../../shared/feature-data";
import {ApiFeature} from "../../../../shared/api-feature.model";

@Component({
  selector: 'app-home',
  templateUrl: './features-view-cards.component.html',
  styleUrls: ['./features-view-cards.component.scss']
})
export class FeaturesViewCardsComponent implements OnInit {

  features: ApiFeature[];
  featureSignIn: ApiFeature;
  featureSignOut: ApiFeature;

  constructor() {
  }

  ngOnInit(): void {
    this.features = FeatureData.features;
    this.featureSignIn = FeatureData.featureSignIn;
    this.featureSignOut = FeatureData.featureSignOut;
  }

}
