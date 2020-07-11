import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BaseItApiService} from "../api/base-it-api.service";

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthApiService extends BaseItApiService {
  URL_CALLBACK = "api/auth/callback";

  constructor(http: HttpClient) {
    super(http);
  }

  callbackFunction(code: string) {
    const params = new HttpParams();
    return super.get(`${this.URL_CALLBACK}/${code}`, params, true)
  }
}