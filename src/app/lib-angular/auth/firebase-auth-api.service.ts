import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BaseItApiService} from "../api/base-it-api.service";
import {map} from "rxjs/operators";
import {AccessTokenModel} from "../../lib/auth/access-token.model";
import {JwtHelperService} from "@auth0/angular-jwt";
import {IAuthApiService} from "./i-auth-api-service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthApiService extends BaseItApiService implements IAuthApiService {
  URL_CALLBACK = "api/auth/callback";

  constructor(http: HttpClient, public jwtHelper: JwtHelperService) {
    super(http);
  }

  requestAccessToken(code: string): Observable<AccessTokenModel> {
    const params = new HttpParams();
    return super.get(`${this.URL_CALLBACK}/${code}`, params, true)
      .pipe(
        map(res => {
          return new AccessTokenModel(res);
        })
      );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    let result = !!token || !this.jwtHelper.isTokenExpired(token);

    console.debug(`[firebase-auth-api] isAuthenticated:
    stored token: ${!!token},
    helper: ${this.jwtHelper.isTokenExpired(token)},
    result: ${result}`);

    return !!token || !this.jwtHelper.isTokenExpired(token);
  }
}
