import {Injectable} from '@angular/core';
import {BaseItApiService} from "../api/base-it-api.service";
import {HttpClient} from "@angular/common/http";
import {AnnouncementEndpoints} from "../../lib-ts/announcements/announcement.endpoints";
import {Observable, throwError} from "rxjs";
import {AnnouncementModel} from "../../lib-ts/announcements/announcement.model";
import {catchError, map} from "rxjs/operators";
import {UserEndpoints} from "../../lib-ts/users/user.endpoints";
import {UserModel} from "../../lib-ts/users/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService extends BaseItApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getAnnouncementsPublic(): Observable<AnnouncementModel[]> {
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

  public getAnnouncementsPublicPaginated(): Observable<AnnouncementModel[]> {
    return super.get(AnnouncementEndpoints.ENDPOINT_GET_ANNOUNCEMENTS_PUBLIC_PAGINATED, [])
      .pipe(
        map((data) => {
          let result: AnnouncementModel[] = [];
          if (Array.isArray(data)) {
            data.forEach(item => {
              result.push(new AnnouncementModel(item));
            })
          }
          return result;
        }), catchError(error => {
          return throwError(`[angular-it-api] API Error: ${error}`);
        })
      )
  }
}