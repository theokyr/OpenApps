import {ApiResponseModel} from "../api/api-response.model";

export class CategoryModel extends ApiResponseModel {
  private readonly _name: string;
  private readonly _public: boolean;
  private readonly _wid: string;

  constructor(obj: any) {
    super(obj._id);
    this._name = obj.name;
    this._public = obj.public;
    this._wid = obj.wid;
  }

  get name(): string {
    return this._name;
  }

  get public(): boolean {
    return this._public;
  }

  get wid(): string {
    return this._wid;
  }
}
