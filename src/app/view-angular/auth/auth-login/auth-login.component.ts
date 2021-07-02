import {Component, OnInit} from '@angular/core';
import {AuthApiFactoryService} from "../../../lib-angular/auth/auth-api-factory.service";

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {
  constructor(public authFactory: AuthApiFactoryService) {
  }

  ngOnInit() {
    this.authFactory.service.redirectLogin();
  }

}
