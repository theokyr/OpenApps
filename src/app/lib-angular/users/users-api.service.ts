import {Injectable} from '@angular/core';
import {BaseItApiService} from "../api/base-it-api.service";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {UserEndpoints} from "../../lib/users/user.endpoints";
import {UserModel} from "../../lib/users/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService extends BaseItApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getUsers(): Observable<UserModel[]> {
    return super
      .get(UserEndpoints.ENDPOINT_GET_USERS_PUBLIC, [])
      .pipe(
        map((data) => {
          let result = [];
          if (Array.isArray(data)) {
            data.forEach(item => {
              result.push(new UserModel(item));
            })
          }
          return result;
        }), catchError(error => {
          return throwError(`[angular-it-api] API Error: ${error}`);
        })
      )
  }

}
