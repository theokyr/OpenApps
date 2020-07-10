import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FirebaseAuthApiService} from "../../../lib-angular/auth/firebase-auth-api.service";

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  access_token: string;
  user: string;
  refresh_token: string;
  error: string;
  error_reason: string;
  error_description: string;

  constructor(private route: ActivatedRoute, public authService: FirebaseAuthApiService) {
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
      .callbackFunction(code)
      .subscribe(res => {
        console.log(res);
      })
  }

}
