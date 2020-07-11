import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalAuthApiService} from "./local-auth-api.service";
import {FirebaseAuthApiService} from "./firebase-auth-api.service";
import {JwtModule} from "@auth0/angular-jwt";
import {environment} from "../../../environments/environment";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.base_url],
        headerName: "x-access-token"
      },
    }),
  ],
  providers: [
    LocalAuthApiService,
    FirebaseAuthApiService
  ]
})
export class AuthLibModule {
}
