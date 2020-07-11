import {Component, Input, OnInit} from '@angular/core';
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import {ApiFeatureStateModel} from "../../../../shared/api-feature-state.model";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons/faUserAlt";
import {faUserAltSlash} from "@fortawesome/free-solid-svg-icons/faUserAltSlash";
import {faUnlock} from "@fortawesome/free-solid-svg-icons/faUnlock";

@Component({
  selector: 'app-feature-view-list-item',
  templateUrl: './feature-view-list-item.component.html',
  styleUrls: ['./feature-view-list-item.component.scss']
})
export class FeatureViewListItemComponent implements OnInit {
  public readonly API_FEATURE_STATE_PUBLIC = ApiFeatureStateModel.Public;
  public readonly API_FEATURE_STATE_PRIVATE = ApiFeatureStateModel.Private;
  public readonly API_FEATURE_STATE_SIGNED_OUT = ApiFeatureStateModel.SignedOut;
  public readonly API_FEATURE_STATE_SIGNED_IN = ApiFeatureStateModel.SignedIn;

  @Input()
  icon;
  @Input()
  title;
  @Input()
  link;
  @Input()
  infoLink;
  @Input()
  featureState: ApiFeatureStateModel;
  @Input()
  isAuthenticated: boolean;

  isRouterLink: boolean;
  displayFeature: boolean;

  faPublic = faGlobe;
  faPrivate = faLock;
  faPrivateAuthenticated = faUnlock;
  faUserSignedOut = faUserAltSlash;
  faUserSignedIn = faUserAlt;
  faInfo = faInfoCircle;

  constructor() {
  }

  ngOnInit(): void {
    this.isRouterLink = !this.link.startsWith("http");
  }

}
