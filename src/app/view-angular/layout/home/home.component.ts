import {Component, OnInit} from '@angular/core';
import {Features} from "../../../shared/features";
import {ApiFeature} from "../../../shared/api-feature.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
