import {ApiResponseModel} from "../api/api-response.model";

export class SocialMediaExtra extends ApiResponseModel {
  private readonly name: string;
  private readonly url: string;

  constructor(obj: any) {
    super(obj.id);
    this.name = obj.name;
    this.url = obj.url;
  }
}
