import {Component, OnInit} from '@angular/core';
import {faBoxes} from "@fortawesome/free-solid-svg-icons/faBoxes";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faNewspaper} from "@fortawesome/free-solid-svg-icons/faNewspaper";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faAppIcon = faBoxes;
  faHome = faHome;
  faAnnouncements = faNewspaper;
  faUsers = faSearch;
  faSignIn = faSignInAlt;
  faSignOut = faSignOutAlt;


  constructor() {
  }

  ngOnInit(): void {
  }

}
