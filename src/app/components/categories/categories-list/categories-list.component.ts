import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from "../../../lib-ts/categories/category.model";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  @Input()
  categories: CategoryModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
