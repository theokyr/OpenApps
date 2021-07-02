import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthEndpoints} from "../../lib/auth/auth.endpoints";
import {environment} from "../../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";
import {AccessTokenModel} from "../../lib/auth/access-token.model";
import {BaseAuthApiService} from "./base-auth-api-service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {IAuthApiService} from "./i-auth-api.service";

@Injectable({
  providedIn: 'root'
})
export class LocalAuthApiService extends BaseAuthApiService implements IAuthApiService {
  private static readonly POST_TOKEN_HEADERS = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(http: HttpClient, jwtHelper: JwtHelperService) {
    super(http, jwtHelper);
  }


  public requestAccessToken(code: string) {
    const formData = new Map<string, string>();
    formData.set(AuthEndpoints.PARAM_CLIENT_ID, environment.client_id);
    formData.set(AuthEndpoints.PARAM_CLIENT_SECRET, environment.client_secret);
    formData.set(AuthEndpoints.PARAM_GRANT_TYPE, environment.grant_type_access_token);
    formData.set(AuthEndpoints.PARAM_CODE, code);

    return super
      .postLogin(AuthEndpoints.LOGIN_ENDPOINT_API_TOKEN, LocalAuthApiService.POST_TOKEN_HEADERS, formData)
      .pipe(
        map(res => {
          let accessTokenModel = new AccessTokenModel(res);
          return super.login(accessTokenModel);
        })
      );
  }

  public refreshToken(refreshToken: string) {
    const formData = new Map<string, string>();
    formData.set(AuthEndpoints.PARAM_CLIENT_ID, environment.client_id);
    formData.set(AuthEndpoints.PARAM_CLIENT_SECRET, environment.client_secret);
    formData.set(AuthEndpoints.PARAM_GRANT_TYPE, environment.grant_type_refresh_token);
    formData.set(AuthEndpoints.PARAM_SCOPE, environment.scope);
    formData.set(AuthEndpoints.PARAM_CODE, refreshToken);

    return super
      .postLogin(AuthEndpoints.LOGIN_ENDPOINT_API_TOKEN, LocalAuthApiService.POST_TOKEN_HEADERS, formData)
      .pipe(
        map((data) => {
          console.log(data);
          return new AccessTokenModel(data);
        }), catchError(error => {
          return throwError(`[angular-it-api] API Error: ${error}`);
        })
      );
  }
}
