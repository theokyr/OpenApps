import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class BaseApiService {

  private readonly _baseUrl;

  constructor(private http: HttpClient) {
    this._baseUrl = environment.base_url;
  }

  private getUrl(endpoint: string) {
    return `${this._baseUrl}/${endpoint}`;
  }

  protected get(endpoint: string, data: Object) {
    return this.http
      .get(this.getUrl(endpoint), data)
      .subscribe(data => data)
  }
}
