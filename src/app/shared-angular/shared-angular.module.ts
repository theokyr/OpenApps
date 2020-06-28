import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TruncatePipeDirective} from "./truncate-pipe.directive";
import {LibItApiModule} from "../lib-angular/lib-it-api.module";

@NgModule({
  declarations: [TruncatePipeDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    TruncatePipeDirective,
    LibItApiModule
  ]
})
export class SharedAngularModule {
}
