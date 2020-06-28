import {Component, Input, OnInit} from '@angular/core';
import {AnnouncementsApiService} from "../../../lib-angular/announcements/announcements-api.service";
import {AnnouncementModel} from "../../../lib-ts/announcements/announcement.model";
import {CategoriesApiService} from "../../../lib-angular/categories/categories-api.service";
import {CategoryModel} from "../../../lib-ts/categories/category.model";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.scss']
})
export class AnnouncementsListComponent implements OnInit {

  @Input()
  paginated: boolean;

  public announcements: AnnouncementModel[];
  public categories: CategoryModel[] = [];

  constructor(public service: AnnouncementsApiService, public categoriesService: CategoriesApiService) {
    this.announcements = [];
  }

  ngOnInit(): void {
    this.getAnnouncementsList();
  }

  getAnnouncementsList() {
    let categoriesObservable = this.categoriesService.getCategoriesPublic();

    let announcementsObservable = this.paginated ?
      this.service.getAnnouncementsPublicPaginated() : this.service.getAnnouncementsPublic();

    let observables = [categoriesObservable, announcementsObservable]
    forkJoin(observables)
      .subscribe(res => {
        this.categories = <CategoryModel[]>res[0];
        this.announcements = <AnnouncementModel[]>res[1];

        if (this.categories.length > 0) {
          this.announcements.forEach(announcement => {
            this.categories.filter(category => category.id == announcement.categoryId)
              .forEach(category => {
                announcement.category = category;
              })
          })
        } else {
        }
      })
  }

}
