import {Component, OnInit} from '@angular/core';
import {faNewspaper} from "@fortawesome/free-solid-svg-icons/faNewspaper";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {ApiFeature} from "../../../shared/api-feature.model";
import {TranslatedText} from "../../../lib-ts/announcements/translated-text";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  static faNewspaper = faNewspaper;
  static faSearch = faSearch;

  features = [
    new ApiFeature(
      new TranslatedText("Ανακοινώσεις", "Announcements"),
      "/announcements/",
      faNewspaper,
      true),
    new ApiFeature(
      new TranslatedText("Υπηρεσία Καταλόγου", "User Catalog"),
      "/users/",
      faSearch,
      true),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
