import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthApiService} from "../../../lib-angular/auth/auth-api.service";

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

  constructor(private route: ActivatedRoute, public authService: AuthApiService) {
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
      this.refresh_token = item.get("code");
      this.finalizeAuthentication(this.refresh_token);
    })
  }

  finalizeAuthentication(refreshToken: string) {
    console.log(`Finalizing auth with refresh token ${refreshToken}`)
    this.authService
      .accessToken(refreshToken)
      .subscribe(res => {
        console.log(res);
      })
  }

}
