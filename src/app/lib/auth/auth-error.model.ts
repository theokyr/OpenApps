export class AuthErrorModel {
  private readonly _message: string;
  private readonly _code: string;

  constructor(obj: any) {
    this._message = obj.message;
    this._code = obj.code;
  }

  get message(): string {
    return this._message;
  }

  get code(): string {
    return this._code;
  }
}
