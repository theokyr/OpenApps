import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {AnnouncementModel} from "../../../lib/announcements/announcement.model";
import {CategoryModel} from "../../../lib/categories/category.model";
import {AnnouncementsApiService} from "../../../lib-angular/announcements/announcements-api.service";
import {CategoriesApiService} from "../../../lib-angular/categories/categories-api.service";
import {TranslatedText} from "../../../lib/announcements/translated-text";
import {faNewspaper} from "@fortawesome/free-solid-svg-icons/faNewspaper";
import {map, mergeMap} from "rxjs/operators";
import {Publisher} from "../../../lib/announcements/publisher";

@Component({
  selector: 'app-home',
  templateUrl: './bulletin-board-view.component.html',
  styleUrls: ['./bulletin-board-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulletinBoardViewComponent implements AfterViewInit {
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

  public isLoading: boolean = false;

  constructor(public categoriesService: CategoriesApiService,
              public announcementsService: AnnouncementsApiService,
              private changeDetector: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.selectedCategory = BulletinBoardViewComponent.CATEGORY_ALL;
    this.getBulletinBoard().subscribe();
  }

  onCategorySelected(category: CategoryModel) {
    this.selectedCategory = category;
  }

  getBulletinBoard() {
    this.isLoading = true;
    return this.categoriesService.getCategoriesPublic()
      .pipe(
        mergeMap(categories => {
          this.categories = categories;
          this.categories.unshift(BulletinBoardViewComponent.CATEGORY_ALL);

          return this.announcementsService.getAnnouncementsPublicPaginated()
            .pipe(
              map(announcements => {
                announcements.forEach(announcement => {
                  this.categories.filter(category => category.id == announcement.categoryId)
                    .forEach(category => {
                      announcement.category = category;
                    })
                })
                this.announcements = announcements;

                for (let i = 0; i < 300; i++) {
                  let temp = new AnnouncementModel(
                    "id",
                    new Publisher("id", "name"),
                    new TranslatedText(i.toString(), i.toString()),
                    new TranslatedText(i.toString(), i.toString()),
                    new Date(),
                    undefined,
                    "id"
                  )
                  this.announcements.push(temp);
                }
                this.isLoading = false;
                this.changeDetector.markForCheck();
              })
            )
        })
      );
  }
}
