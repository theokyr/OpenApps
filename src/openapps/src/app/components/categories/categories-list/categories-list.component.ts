import { Component, OnInit } from '@angular/core';
import {CategoriesApiService} from "../../../lib-angular/categories/categories-api.service";
import {CategoryModel} from "../../../lib/categories/category.model";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  public categories: CategoryModel[];

  constructor(public service: CategoriesApiService) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.getPublicCategories();
  }

  getPublicCategories() {
    this.service.getCategoriesPublic()
      .subscribe(data => {
        if (Array.isArray(data)){
          data.forEach(item => {
            this.categories.push(new CategoryModel(item));
          })
        }
      })
  }

}
