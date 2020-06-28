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
  announcements: AnnouncementModel[];

  ngOnInit() {
  }

}
