import {TranslatedText} from "../lib/announcements/translated-text";
import {ApiFeature} from "./api-feature.model";

export class ApiFeatureCategoryModel {
  private readonly _title: TranslatedText;
  private readonly _icon: Object;
  private readonly _features: ApiFeature[];

  constructor(title: TranslatedText, icon: Object, features: ApiFeature[]) {
    this._title = title;
    this._icon = icon;
    this._features = features;
  }

  get title(): TranslatedText {
    return this._title;
  }

  get icon(): Object {
    return this._icon;
  }

  get features(): ApiFeature[] {
    return this._features;
  }
}
