import {Component, OnInit} from '@angular/core';
import {faBoxes} from "@fortawesome/free-solid-svg-icons/faBoxes";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faNewspaper} from "@fortawesome/free-solid-svg-icons/faNewspaper";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import {FirebaseAuthApiService} from "../../../lib-angular/auth/firebase-auth-api.service";
import {IAuthApiService} from "../../../lib-angular/auth/i-auth-api.service";
import {LocalAuthApiService} from "../../../lib-angular/auth/local-auth-api.service";
import {environment} from "../../../../environments/environment";

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
  authService: IAuthApiService;

  constructor(
    private firebaseAuthService: FirebaseAuthApiService,
    private localAuthService: LocalAuthApiService) {
    this.authService = environment.production ? firebaseAuthService : localAuthService;
    this.authService.isAuthenticated().subscribe(value => {
      console.log(`header New value! ${value}`)
      this.isAuthenticated = value;
    });
  }

  ngOnInit(): void {
  }


}
