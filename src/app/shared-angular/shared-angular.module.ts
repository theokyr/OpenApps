import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TruncatePipeDirective} from "./directives/truncate-pipe.directive";

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
