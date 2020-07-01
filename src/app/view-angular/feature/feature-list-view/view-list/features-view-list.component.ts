import {Component, OnInit} from '@angular/core';
import {FeatureData} from "../../../../shared/feature-data";
import {ApiFeature} from "../../../../shared/api-feature.model";

@Component({
  selector: 'app-view-list',
  templateUrl: './features-view-list.component.html',
  styleUrls: ['./features-view-list.component.scss']
})
export class FeaturesViewListComponent implements OnInit {

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
