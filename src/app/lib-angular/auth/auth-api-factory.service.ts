import {Injectable} from '@angular/core';
import {IAuthApiService} from "./i-auth-api.service";
import {FirebaseAuthApiService} from "./firebase-auth-api.service";
import {LocalAuthApiService} from "./local-auth-api.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthApiFactoryService {
  private readonly _service: IAuthApiService;

  // temporary solution: ideally we would never want to inject both Local and Prod Api services
  constructor(private firebaseAuthService: FirebaseAuthApiService,
              private localAuthService: LocalAuthApiService) {
    this._service = environment.production ? firebaseAuthService : localAuthService;
  }

  get service(): IAuthApiService {
    return this._service;
  }
}
