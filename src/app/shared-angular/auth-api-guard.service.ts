import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {LocalAuthApiService} from "../lib-angular/auth/local-auth-api.service";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthApiGuardService implements CanActivate {
  constructor(public auth: LocalAuthApiService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.isAuthenticated().pipe(
      map(e => {
        if (e) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      }),
      catchError((err) => {
        this.router.navigate(['/']);
        return of(false);
      })
    );
  }
}
