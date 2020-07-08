import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthApiService} from "../lib-angular/auth/auth-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthApiGuardService implements CanActivate {
  constructor(public auth: AuthApiService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
