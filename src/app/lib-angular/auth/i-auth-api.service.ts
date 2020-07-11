import {Observable} from "rxjs";
import {AccessTokenModel} from "../../lib/auth/access-token.model";

export interface IAuthApiService {
  requestAccessToken(code: string): Observable<AccessTokenModel>;

  isAuthenticated();

  logout();
}
