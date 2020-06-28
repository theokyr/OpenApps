import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {AnnouncementsApiService} from "./announcements-api.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [
    AnnouncementsApiService
  ]
})
export class AnnouncementsLibModule {
}
