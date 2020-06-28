import {Injectable} from '@angular/core';
import {BaseItApiService} from "../api/base-it-api.service";
import {HttpClient} from "@angular/common/http";
import {CategoryEndpoints} from "../../lib-ts/categories/category.endpoints";

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService extends BaseItApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getCategoriesPublic() {
    return super.get(CategoryEndpoints.ENDPOINT_GET_CATEGORIES_PUBLIC, [])
  }
}
