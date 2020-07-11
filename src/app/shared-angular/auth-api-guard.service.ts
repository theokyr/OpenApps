import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {LocalAuthApiService} from "../lib-angular/auth/local-auth-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthApiGuardService implements CanActivate {
  constructor(public auth: LocalAuthApiService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
