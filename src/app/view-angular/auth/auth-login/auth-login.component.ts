import {Component, OnInit} from '@angular/core';
import {AuthApiService} from "../../../lib-angular/auth/auth-api.service";

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  constructor(public authService: AuthApiService) {
  }

  ngOnInit(): void {
    this.authService.refreshToken();
  }

}
