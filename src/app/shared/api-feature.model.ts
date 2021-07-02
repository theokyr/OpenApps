import {TranslatedText} from "../lib/announcements/translated-text";
import {ApiFeatureStateModel} from "./api-feature-state.model";

export class ApiFeature {
  private readonly _title: TranslatedText;
  private readonly _link: string;
  private readonly _infoLink: string;
  private readonly _icon: Object;
  private readonly _featureState: ApiFeatureStateModel;
  private _infoText: TranslatedText;

  constructor(title: TranslatedText, link: string, infoLink: string, icon: Object, publicFeature: ApiFeatureStateModel, infoText?: TranslatedText) {
    this._title = title;
    this._link = link;
    this._infoLink = infoLink;
    this._icon = icon;
    this._featureState = publicFeature;
    this._infoText = infoText;
  }

  get title(): TranslatedText {
    return this._title;
  }

  get link(): string {
    return this._link;
  }

  get infoLink(): string {
    return this._infoLink;
  }

  get icon(): Object {
    return this._icon;
  }

  get featureState(): ApiFeatureStateModel {
    return this._featureState;
  }

  get infoText(): TranslatedText {
    return this._infoText;
  }
}
