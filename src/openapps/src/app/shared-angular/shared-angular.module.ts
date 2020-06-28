import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TruncatePipeDirective} from "./truncate-pipe.directive";
import {MatCardModule} from "@angular/material/card";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [TruncatePipeDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    TruncatePipeDirective
  ]
})
export class SharedAngularModule {
}
