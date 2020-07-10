import {Injectable} from '@angular/core';
import {BaseItApiService} from "../api/base-it-api.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthEndpoints} from "../../lib/auth/auth.endpoints";
import {environment} from "../../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";
import {AccessTokenModel} from "../../lib/auth/access-token.model";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends BaseItApiService {
  private static readonly POST_TOKEN_HEADERS = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(http: HttpClient/*, public jwtHelper: JwtHelperService*/) {
    super(http);
  }

  public redirectLogin() {
    const queryParamClientId = `${AuthEndpoints.PARAM_CLIENT_ID}=${environment.client_id}`
    const queryParamResponseType = `${AuthEndpoints.PARAM_RESPONSE_TYPE}=${environment.response_type}`
    const queryParamScope = `${AuthEndpoints.PARAM_SCOPE}=${environment.scope}`
    const queryRedirectUrl = `${AuthEndpoints.PARAM_REDIRECT_URI}=${environment.redirect_uri}`
    const queryGrantType = `grant_type=refresh_token`

    window.location.href = `${AuthEndpoints.LOGIN_URL_REDIRECT_AUTHENTICATION}?${queryParamClientId}&${queryParamResponseType}&${queryParamScope}&${queryRedirectUrl}&${queryGrantType}`
  }

  public accessToken() {
    const formData = new Map<string, string>();
    formData.set(AuthEndpoints.PARAM_CLIENT_ID, environment.client_id);
    formData.set(AuthEndpoints.PARAM_CLIENT_SECRET, environment.client_secret);
    formData.set(AuthEndpoints.PARAM_GRANT_TYPE, environment.grant_type_access_token);
    formData.set(AuthEndpoints.PARAM_SCOPE, environment.scope);

    return super
      .postLogin(AuthEndpoints.LOGIN_ENDPOINT_API_TOKEN, AuthApiService.POST_TOKEN_HEADERS, formData)
      .pipe(
        map((data) => {
          console.log(data);
          return new AccessTokenModel(data);
        }), catchError(error => {
          return throwError(`[angular-it-api] API Error: ${error}`);
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
      .postLogin(AuthEndpoints.LOGIN_ENDPOINT_API_TOKEN, AuthApiService.POST_TOKEN_HEADERS, formData)
      .pipe(
        map((data) => {
          console.log(data);
          return new AccessTokenModel(data);
        }), catchError(error => {
          return throwError(`[angular-it-api] API Error: ${error}`);
        })
      );
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
    // return !this.jwtHelper.isTokenExpired(token);
  }
}
