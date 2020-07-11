import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons/faExclamationCircle";
import {AuthApiFactoryService} from "../../../lib-angular/auth/auth-api-factory.service";

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  isAuthFinished: boolean = false;
  isAuthSuccessful: boolean = false;

  errorMessage: string;

  faError = faExclamationCircle;
  faBack = faArrowLeft;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authFactory: AuthApiFactoryService) {
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
    this.authFactory.service
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
