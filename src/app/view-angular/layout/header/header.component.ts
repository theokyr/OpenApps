import {Component, OnInit} from '@angular/core';
import {faBoxes} from "@fortawesome/free-solid-svg-icons/faBoxes";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faNewspaper} from "@fortawesome/free-solid-svg-icons/faNewspaper";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import {AuthApiFactoryService} from "../../../lib-angular/auth/auth-api-factory.service";

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

  public isAuthenticated = false;

  constructor(private authFactory: AuthApiFactoryService) {
    this.authFactory.service.isAuthenticated().subscribe(value => {
      console.log(`[HeaderComponent] New value! ${value}`)
      this.isAuthenticated = value;
    });
  }

  ngOnInit(): void {
  }


}
