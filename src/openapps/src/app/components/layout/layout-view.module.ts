import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {CategoriesViewModule} from "../categories/categories-view.module";



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CategoriesViewModule
  ]
})
export class LayoutViewModule { }
