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

  public refreshToken() {
    const queryParamClientId = `${AuthEndpoints.ENDPOINT_API_AUTH_PARAM_CLIENT_ID}=${environment.client_id}`
    const queryParamResponseType = `${AuthEndpoints.ENDPOINT_API_AUTH_PARAM_RESPONSE_TYPE}=${environment.response_type}`
    const queryParamScope = `${AuthEndpoints.ENDPOINT_API_AUTH_PARAM_SCOPE}=${environment.scope}`
    const queryRedirectUrl = `${AuthEndpoints.ENDPOINT_API_AUTH_PARAM_REDIRECT_URI}=${environment.redirect_uri}`

    window.location.href = `${AuthEndpoints.ENDPOINT_API_AUTH}?${queryParamClientId}&${queryParamResponseType}&${queryParamScope}&${queryRedirectUrl}`
  }

  public accessToken(refreshToken: string) {
    const formData = new Map<string, string>();
    formData.set(AuthEndpoints.ENDPOINT_API_AUTH_PARAM_CLIENT_SECRET, environment.client_secret);
    formData.set(AuthEndpoints.ENDPOINT_API_AUTH_PARAM_GRANT_TYPE, environment.grant_type);
    formData.set(AuthEndpoints.ENDPOINT_API_AUTH_PARAM_CODE, refreshToken);

    return super
      .post(AuthEndpoints.ENDPOINT_API_TOKEN, AuthApiService.POST_TOKEN_HEADERS, formData)
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
