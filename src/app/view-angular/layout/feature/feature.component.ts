import {Component, Input, OnInit} from '@angular/core';
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import {ApiFeatureStateModel} from "../../../shared/api-feature-state.model";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons/faUserAlt";
import {faUserAltSlash} from "@fortawesome/free-solid-svg-icons/faUserAltSlash";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
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

  isRouterLink: boolean;

  faPublic = faGlobe;
  faPrivate = faLock;
  faUserSignedOut = faUserAltSlash;
  faUserSignedIn = faUserAlt;
  faOpen = faArrowCircleRight;
  faInfo = faInfoCircle;

  constructor() {
  }

  ngOnInit(): void {
    this.isRouterLink = !this.link.startsWith("http");
  }

}
