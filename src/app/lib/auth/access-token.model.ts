import {AuthErrorModel} from "./auth-error.model";

export class AccessTokenModel {

  private readonly _access_token: string;
  private readonly _user: string;
  private readonly _refresh_token: string;
  private readonly _error: AuthErrorModel;

  constructor(obj: any) {
    this._access_token = obj.access_token;
    this._user = obj.user;
    this._refresh_token = obj.refresh_token;
    if (obj.error) {
      this._error = new AuthErrorModel(obj.error);
    }
  }

  get access_token(): string {
    return this._access_token;
  }

  get user(): string {
    return this._user;
  }

  get refresh_token(): string {
    return this._refresh_token;
  }

  get error(): AuthErrorModel {
    return this._error;
  }
}
