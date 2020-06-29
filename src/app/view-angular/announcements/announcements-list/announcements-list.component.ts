import {Component, Input, OnInit} from '@angular/core';
import {AnnouncementModel} from "../../../lib/announcements/announcement.model";

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
