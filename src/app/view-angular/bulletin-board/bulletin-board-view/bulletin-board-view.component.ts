import {Component, OnInit} from '@angular/core';
import {AnnouncementModel} from "../../../lib/announcements/announcement.model";
import {CategoryModel} from "../../../lib/categories/category.model";
import {AnnouncementsApiService} from "../../../lib-angular/announcements/announcements-api.service";
import {CategoriesApiService} from "../../../lib-angular/categories/categories-api.service";
import {forkJoin} from "rxjs";
import {TranslatedText} from "../../../lib/announcements/translated-text";
import {faNewspaper} from "@fortawesome/free-solid-svg-icons/faNewspaper";

@Component({
  selector: 'app-home',
  templateUrl: './bulletin-board-view.component.html',
  styleUrls: ['./bulletin-board-view.component.scss']
})
export class BulletinBoardViewComponent implements OnInit {
  private static readonly CATEGORY_ALL: CategoryModel = new CategoryModel({
    _id: -1,
    name: "Όλοι οι πίνακες",
    public: true,
    wid: -1
  });

  public readonly TITLE = new TranslatedText("Ανακοινώσεις", "Announcements");
  public readonly ICON = faNewspaper;


  public announcements: AnnouncementModel[] = [];
  public categories: CategoryModel[] = [];

  public selectedCategory: CategoryModel;

  constructor(public categoriesService: CategoriesApiService,
              public announcementsService: AnnouncementsApiService) {
  }

  ngOnInit(): void {
    this.selectedCategory = BulletinBoardViewComponent.CATEGORY_ALL;
    this.getBulletinBoard();
  }

  onCategorySelected(category: CategoryModel) {
    this.selectedCategory = category;
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

        // prepend "All" category
        this.categories.unshift(BulletinBoardViewComponent.CATEGORY_ALL);

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
