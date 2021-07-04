import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthCallbackComponent} from './auth-callback/auth-callback.component';
import {AppRoutingModule} from "../../shared-angular/routing/app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AuthLoginComponent} from './auth-login/auth-login.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AuthLogoutComponent} from './auth-logout/auth-logout.component';


@NgModule({
  declarations: [AuthCallbackComponent, AuthLoginComponent, AuthLogoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatButtonModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatCardModule
  ]
})
export class AuthenticationViewAngularModule {
}
