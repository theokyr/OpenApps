import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthApiService} from "./auth-api.service";
import {FirebaseAuthApiService} from "./firebase-auth-api.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthApiService,
    FirebaseAuthApiService
  ]
})
export class AuthLibModule {
}
