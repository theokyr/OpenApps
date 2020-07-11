import {Component, OnInit} from '@angular/core';
import {IAuthApiService} from "../../../lib-angular/auth/i-auth-api.service";
import {Router} from "@angular/router";
import {FirebaseAuthApiService} from "../../../lib-angular/auth/firebase-auth-api.service";
import {LocalAuthApiService} from "../../../lib-angular/auth/local-auth-api.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.scss']
})
export class AuthLogoutComponent implements OnInit {

  authService: IAuthApiService;

  // temporary solution: ideally we would never want to inject both Local and Prod Api services
  constructor(private router: Router,
              private firebaseAuthService: FirebaseAuthApiService,
              private localAuthService: LocalAuthApiService) {
    this.authService = environment.production ? firebaseAuthService : localAuthService;
  }

  ngOnInit(): void {
    this.authService.logout().subscribe(res => {
      return this.router.navigate(["/"]);
    });
  }

}
