import {Component, Input, OnInit} from '@angular/core';
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input()
  icon;
  @Input()
  title;
  @Input()
  link;
  @Input()
  infoLink;
  @Input()
  isPublic;

  isRouterLink: boolean;

  faPublic = faGlobe;
  faPrivate = faLock;
  faOpen = faArrowCircleRight;
  faInfo = faInfoCircle;

  constructor() {
  }

  ngOnInit(): void {
    this.isRouterLink = !this.link.startsWith("http");
  }

}
