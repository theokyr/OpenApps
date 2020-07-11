import {AccessTokenModel} from "../../lib/auth/access-token.model";
import {Observable} from "rxjs";

export interface IAuthApiService {
  requestAccessToken(code: string): Observable<AccessTokenModel>;

  isAuthenticated(): boolean;
}
