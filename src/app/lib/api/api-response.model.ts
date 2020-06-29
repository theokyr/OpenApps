export class ApiResponseModel {
  private readonly _id: String;

  constructor(id: String) {
    this._id = id;
  }

  get id(): String {
    return this._id;
  }
}
