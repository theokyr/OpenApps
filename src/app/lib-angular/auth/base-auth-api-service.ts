import {AccessTokenModel} from "../../lib/auth/access-token.model";
import {BehaviorSubject, Observable, of} from "rxjs";
import {BaseItApiService} from "../api/base-it-api.service";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {IAuthApiService} from "./i-auth-api.service";

export abstract class BaseAuthApiService extends BaseItApiService implements IAuthApiService {
  private static readonly KEY_ACCESS_TOKEN: string = "access_token";

  public authenticationSubject: BehaviorSubject<boolean>;
  protected jwtHelper: JwtHelperService;

  constructor(http: HttpClient, jwtHelper: JwtHelperService) {
    super(http);
    this.jwtHelper = jwtHelper;
    this.authenticationSubject = new BehaviorSubject<boolean>(this.isAccessTokenStored());
  }

  isAuthenticated(): Observable<boolean> {
    return this.authenticationSubject;
  }

  private isAccessTokenStored() {
    return !!localStorage.getItem(BaseAuthApiService.KEY_ACCESS_TOKEN);
  }

  abstract requestAccessToken(code: string): Observable<AccessTokenModel>;

  login(result: AccessTokenModel) {
    console.debug("[base-auth] Signing in with token ", result)
    // TODO: Don't
    localStorage.setItem(BaseAuthApiService.KEY_ACCESS_TOKEN, result.access_token);
    this.authenticationSubject.next(true);
    return result;
  }

  logout() {
    console.debug("[base-auth] Logging out");
    localStorage.removeItem(BaseAuthApiService.KEY_ACCESS_TOKEN);
    this.authenticationSubject.next(false);
    return of(true);
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
