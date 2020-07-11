import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LocalAuthApiService} from "../../../lib-angular/auth/local-auth-api.service";
import {FirebaseAuthApiService} from "../../../lib-angular/auth/firebase-auth-api.service";
import {environment} from "../../../../environments/environment";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons/faExclamationCircle";
import {IAuthApiService} from "../../../lib-angular/auth/i-auth-api.service";

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  authService: IAuthApiService;

  isAuthFinished: boolean = false;
  isAuthSuccessful: boolean = false;

  errorMessage: string;

  faError = faExclamationCircle;
  faBack = faArrowLeft;

  // temporary solution: ideally we would never want to inject both Local and Prod Api services
  constructor(private route: ActivatedRoute,
              private router: Router,
              private firebaseAuthService: FirebaseAuthApiService,
              private localAuthService: LocalAuthApiService) {
    this.authService = environment.production ? firebaseAuthService : localAuthService;
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(item => {
      console.log()
      let code = item.get("code");
      if (code) {
        this.finalizeAuthentication(code);
      }
    });
  }

  finalizeAuthentication(code: string) {
    console.log(`Finalizing auth`)
    this.authService
      .requestAccessToken(code)
      .subscribe(res => {
        this.isAuthFinished = true;
        if (res.access_token) {
          this.isAuthSuccessful = true;
          return this.router.navigate(["/"])
        } else {
          if (res.error) {
            this.errorMessage = res.error.message;
            this.isAuthSuccessful = false;
          }
        }
      })
  }

}
