import {Component, Input, OnInit} from '@angular/core';
import {AnnouncementsApiService} from "../../../lib-angular/announcements/announcements-api.service";
import {AnnouncementModel} from "../../../lib-ts/announcements/announcement.model";

@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.scss']
})
export class AnnouncementsListComponent implements OnInit {

  @Input()
  paginated: boolean;

  public announcements: AnnouncementModel[];

  constructor(public service: AnnouncementsApiService) {
    this.announcements = [];
  }

  ngOnInit(): void {
    this.getAnnouncementsList();
  }

  getAnnouncementsList() {
    let observable = this.paginated ?
      this.service.getAnnouncementsPublicPaginated() : this.service.getAnnouncementsPublic();

    observable
      .subscribe(data => {
        if (Array.isArray(data)) {
          data.forEach(item => {
            this.announcements.push(new AnnouncementModel(item));
          })
        }
      })
  }

}
