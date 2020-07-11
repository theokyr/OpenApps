import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AccessTokenModel} from "../../lib/auth/access-token.model";
import {JwtHelperService} from "@auth0/angular-jwt";
import {BaseAuthApiService} from "./base-auth-api-service";
import {Observable} from "rxjs";
import {IAuthApiService} from "./i-auth-api.service";

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthApiService extends BaseAuthApiService implements IAuthApiService {
  URL_CALLBACK = "api/auth/callback";

  constructor(http: HttpClient, jwtHelper: JwtHelperService) {
    super(http, jwtHelper);
  }

  requestAccessToken(code: string): Observable<AccessTokenModel> {
    const params = new HttpParams();
    return super.get(`${this.URL_CALLBACK}/${code}`, params, true)
      .pipe(
        map(res => {
          let accessTokenModel = new AccessTokenModel(res);
          return super.login(accessTokenModel);
        })
      );
  }

  // isAuthenticated(): boolean {
  //   const token = localStorage.getItem('access_token');
  //   let result = !!token || !this.jwtHelper.isTokenExpired(token);
  //
  //   console.debug(`[firebase-auth-api] isAuthenticated:
  //   stored token: ${!!token},
  //   helper: ${this.jwtHelper.isTokenExpired(token)},
  //   result: ${result}`);
  //
  //   return !!token || !this.jwtHelper.isTokenExpired(token);
  // }
}
