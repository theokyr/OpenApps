import {Component, OnInit} from '@angular/core';
import {LocalAuthApiService} from "../../../lib-angular/auth/local-auth-api.service";

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  constructor(public authService: LocalAuthApiService) {
  }

  ngOnInit(): void {
    this.authService.redirectLogin();
  }

}
