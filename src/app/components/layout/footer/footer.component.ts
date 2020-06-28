import {Component, OnInit} from '@angular/core';
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {AppModule} from "../../../app.module";

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
    this.title = AppModule.APP_TITLE;
    this.version = AppModule.APP_VERSION;
  }

  ngOnInit(): void {
  }

}
