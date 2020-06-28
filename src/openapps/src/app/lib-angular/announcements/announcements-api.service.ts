import {Injectable} from '@angular/core';
import {BaseApiService} from "../api/base-api.service";
import {HttpClient} from "@angular/common/http";
import {AnnouncementEndpoints} from "../../lib/announcements/announcement.endpoints";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsApiService extends BaseApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getAnnouncementsPublic() {
    return super.get(AnnouncementEndpoints.ENDPOINT_GET_ANNOUNCEMENTS_PUBLIC, [])
  }
}
