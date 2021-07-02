import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AnnouncementModel} from "../../../lib/announcements/announcement.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {faList} from "@fortawesome/free-solid-svg-icons/faList";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faNewspaper} from "@fortawesome/free-solid-svg-icons/faNewspaper";
import {faTable} from "@fortawesome/free-solid-svg-icons/faTable";

@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.scss']
})
export class AnnouncementsListComponent implements OnInit {
  displayedColumns: string[] = ['category', 'publisher', 'title', 'text'];
  dataSource: MatTableDataSource<AnnouncementModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Input()
  announcements: AnnouncementModel[];

  faCategory = faList;
  faPublisher = faUser;
  faTitle = faNewspaper;
  faContent = faTable;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (!this.announcements) {
      console.error("[announcements-list] Can't initialize an empty table!");
      return;
    }

    console.log("[announcements-list] Initializing Table");
    this.dataSource = new MatTableDataSource<AnnouncementModel>(this.announcements);
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
