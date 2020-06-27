import {Injectable} from '@angular/core';
import {BaseApiService} from "../../angular-shared/api/base-api.service";
import {HttpClient} from "@angular/common/http";
import {CategoryEndpoints} from "../../lib/categories/category.endpoints";

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService extends BaseApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getCategoriesPublic() {
    return super.get(CategoryEndpoints.ENDPOINT_GET_CATEGORIES_PUBLIC, [])
  }
}
