import {Component, OnInit} from '@angular/core';
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {Constants} from "../../../shared/constants";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faGithub = faGithub;
  title: string;
  version: string;

  constructor() {
    this.title = Constants.APP_TITLE;
    this.version = Constants.APP_VERSION;
  }

  ngOnInit(): void {
  }

}
