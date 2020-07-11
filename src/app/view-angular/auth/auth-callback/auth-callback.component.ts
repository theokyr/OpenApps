import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LocalAuthApiService} from "../../../lib-angular/auth/local-auth-api.service";
import {FirebaseAuthApiService} from "../../../lib-angular/auth/firebase-auth-api.service";
import {IAuthApiService} from "../../../lib-angular/auth/i-auth-api-service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  authService: IAuthApiService;

  access_token: string;
  user: string;
  refresh_token: string;
  error: string;
  error_reason: string;
  error_description: string;

  // temporary solution: ideally we would never want to inject both Local and Prod Api services
  constructor(private route: ActivatedRoute, firebaseAuthService: FirebaseAuthApiService, localAuthService: LocalAuthApiService) {
    this.authService = environment.production ? firebaseAuthService : localAuthService;
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      console.log()
      const response = new URLSearchParams(fragment);
      this.access_token = response.get("access_token");
      this.error = response.get("error");
      this.error_reason = response.get("error_reason");
      this.error_description = response.get("error_description");
    })
    this.route.queryParamMap.subscribe(item => {
      console.log()
      let code = item.get("code");
      if (code) {
        this.finalizeAuthentication(code);
      }
    })
  }

  finalizeAuthentication(code: string) {
    console.log(`Finalizing auth`)
    this.authService
      .requestAccessToken(code)
      .subscribe(res => {
        // TODO: Don't
        localStorage.setItem("access_token", res.access_token)
      })
  }

}
