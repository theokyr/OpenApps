import {Component, OnInit} from '@angular/core';
import {AnnouncementModel} from "../../../lib/announcements/announcement.model";
import {CategoryModel} from "../../../lib/categories/category.model";
import {AnnouncementsApiService} from "../../../lib-angular/announcements/announcements-api.service";
import {CategoriesApiService} from "../../../lib-angular/categories/categories-api.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './bulletin-board-view.component.html',
  styleUrls: ['./bulletin-board-view.component.scss']
})
export class BulletinBoardViewComponent implements OnInit {

  public announcements: AnnouncementModel[] = [];
  public categories: CategoryModel[] = [];

  constructor(public categoriesService: CategoriesApiService,
              public announcementsService: AnnouncementsApiService) {
  }

  ngOnInit(): void {
    this.getBulletinBoard();
  }

  getBulletinBoard() {
    let observables = [
      this.categoriesService.getCategoriesPublic(),
      this.announcementsService.getAnnouncementsPublicPaginated()
    ]

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
