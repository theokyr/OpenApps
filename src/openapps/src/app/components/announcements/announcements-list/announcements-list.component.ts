import {Component, OnInit} from '@angular/core';
import {AnnouncementsApiService} from "../../../lib-angular/announcements/announcements-api.service";
import {AnnouncementModel} from "../../../lib/announcements/announcement.model";

@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.scss']
})
export class AnnouncementsListComponent implements OnInit {

  public announcements: AnnouncementModel[];

  constructor(public service: AnnouncementsApiService) {
    this.announcements = [];
  }

  ngOnInit(): void {
    this.getAnnouncementsList();
  }

  getAnnouncementsList() {
    this.service.getAnnouncementsPublic()
      .subscribe(data => {
        if (Array.isArray(data)) {
          data.forEach(item => {
            this.announcements.push(new AnnouncementModel(item));
          })
        }
      })
  }

}
