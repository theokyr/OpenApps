import {Injectable} from '@angular/core';
import {BaseItApiService} from "../api/base-it-api.service";
import {HttpClient} from "@angular/common/http";
import {AnnouncementEndpoints} from "../../lib-ts/announcements/announcement.endpoints";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsApiService extends BaseItApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getAnnouncementsPublic() {
    return super.get(AnnouncementEndpoints.ENDPOINT_GET_ANNOUNCEMENTS_PUBLIC, [])
  }
}
