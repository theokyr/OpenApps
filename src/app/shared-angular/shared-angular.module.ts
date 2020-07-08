import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TruncatePipeDirective} from "./directives/truncate-pipe.directive";
import {AuthApiGuardService} from "./auth-api-guard.service";

// @ts-ignore
@NgModule({
  declarations: [TruncatePipeDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    TruncatePipeDirective
  ],
  providers: [
    AuthApiGuardService
  ]
})
export class SharedAngularModule {
}
