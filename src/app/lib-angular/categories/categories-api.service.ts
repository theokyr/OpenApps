import {Injectable} from '@angular/core';
import {BaseItApiService} from "../api/base-it-api.service";
import {HttpClient} from "@angular/common/http";
import {CategoryEndpoints} from "../../lib-ts/categories/category.endpoints";
import {CategoryModel} from "../../lib-ts/categories/category.model";
import {catchError, map} from "rxjs/operators";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService extends BaseItApiService {
  public static cachedCategories: CategoryModel[] = [];

  constructor(http: HttpClient) {
    super(http);
  }

  public getCategoriesPublic(): Observable<CategoryModel[]> {
    if (CategoriesApiService.cachedCategories.length > 0) {
      console.debug(`[angular-it-api] Returning ${CategoriesApiService.cachedCategories} cached categories`);
      return of(CategoriesApiService.cachedCategories);
    }

    return super.get(CategoryEndpoints.ENDPOINT_GET_CATEGORIES_PUBLIC, [])
      .pipe(
        map((data) => {
          let result = [];
          if (Array.isArray(data)) {
            data.forEach(item => {
              result.push(new CategoryModel(item));
            })
          }
          console.debug(`[angular-it-api] Fetched ${result.length} categories`);
          return result;
        }), catchError(error => {
          return throwError(`API Error: ${error}`);
        })
      )
  }
}
