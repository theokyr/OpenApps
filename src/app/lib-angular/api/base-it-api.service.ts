import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {of} from "rxjs";

@Injectable()
export class BaseItApiService {

  private static _BASE_URL;
  private static _BASE_LOGIN_URL;

  constructor(private http: HttpClient) {
  }

  public static setBaseUrl(value) {
    this._BASE_URL = value;
  }

  public static setBaseLoginUrl(value) {
    this._BASE_LOGIN_URL = value;
  }

  private static getUrl(endpoint: string) {
    return `${BaseItApiService._BASE_URL}/${endpoint}`;
  }

  private static getUrlLogin(endpoint: string) {
    return `${BaseItApiService._BASE_LOGIN_URL}/${endpoint}`;
  }

  protected get(endpoint: string, queryParams?: HttpParams) {
    if (!BaseItApiService._BASE_URL) {
      console.error("[angular-it-api] No Base URL has been set!");
      return of([]);
    }
    return this.http
      .get(BaseItApiService.getUrl(endpoint), {params: queryParams})
  }

  protected post(link?: string, queryParams?: HttpParams, isExternal: boolean = false) {
    if (!BaseItApiService._BASE_URL) {
      console.error("[angular-it-api] No Base URL has been set!");
      return of([]);
    }

    let finalUrl = isExternal ? link : BaseItApiService.getUrl(link);

    return this.http
      .post(finalUrl, {responseType: 'json', params: queryParams})
  }

  protected postLogin(endpoint: string, headers: HttpHeaders, formData: Map<string, string>) {
    let params = new HttpParams();
    formData.forEach((value, key, map) => {
      params = params.append(key, value);
    })

    return this.http
      .post(BaseItApiService.getUrlLogin(endpoint), params.toString(), {headers: headers})
  }

  protected postExternal(url: string, endpoint: string, headers: HttpHeaders, formData: Map<string, string>) {
    let params = new HttpParams();
    formData.forEach((value, key, map) => {
      params = params.append(key, value);
    })

    return this.http
      .post(url, params.toString(), {headers: headers})
  }
}
