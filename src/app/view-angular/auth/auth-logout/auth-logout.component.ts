import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthApiFactoryService} from "../../../lib-angular/auth/auth-api-factory.service";

@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.scss']
})
export class AuthLogoutComponent implements OnInit {

  constructor(private router: Router,
              public authFactory: AuthApiFactoryService) {
  }

  ngOnInit(): void {
    this.authFactory.service.logout().subscribe(res => {
      return this.router.navigate(["/"]);
    });
  }

}
