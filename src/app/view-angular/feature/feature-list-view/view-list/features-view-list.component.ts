import {Component, OnInit} from '@angular/core';
import {ApiFeature} from "../../../../shared/api-feature.model";
import {Features} from "../../../../shared/features";

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
    this.features = Features.features;
    this.featureSignIn = Features.featureSignIn;
    this.featureSignOut = Features.featureSignOut;
  }

}
