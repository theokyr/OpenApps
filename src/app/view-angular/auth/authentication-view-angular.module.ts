import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthCallbackComponent} from './auth-callback/auth-callback.component';
import {AppRoutingModule} from "../../shared-angular/routing/app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AuthLoginComponent} from './auth-login/auth-login.component';


@NgModule({
  declarations: [AuthCallbackComponent, AuthLoginComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class AuthenticationViewAngularModule { }
