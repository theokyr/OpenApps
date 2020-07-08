import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {of} from "rxjs";

@Injectable()
export class BaseItApiService {

  private static _BASE_URL;

  constructor(private http: HttpClient) {
  }

  public static setBaseUrl(value) {
    this._BASE_URL = value;
  }

  private static getUrl(endpoint: string) {
    return `${BaseItApiService._BASE_URL}/${endpoint}`;
  }

  protected get(endpoint: string, queryParams?: HttpParams) {
    if (!BaseItApiService._BASE_URL) {
      console.error("[angular-it-api] No Base URL has been set!");
      return of([]);
    }
    return this.http
      .get(BaseItApiService.getUrl(endpoint), {params: queryParams})
  }

  protected post(endpoint: string, headers: HttpHeaders, formData: Map<string, string>) {
    const params = new HttpParams();
    formData.forEach((value, key) => {
      params.append(key, value)
    })

    return this.http
      .post(BaseItApiService.getUrl(endpoint), params.toString(), {headers: headers})
  }
}
