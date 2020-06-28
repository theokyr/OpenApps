import {TranslatedText} from "../lib-ts/announcements/translated-text";

export class ApiFeature {
  private readonly _title: TranslatedText;
  private readonly _link: String;
  private readonly _icon: Object;
  private readonly _publicFeature: boolean;

  constructor(title: TranslatedText, link: String, icon: Object, publicFeature: boolean) {
    this._title = title;
    this._link = link;
    this._icon = icon;
    this._publicFeature = publicFeature;
  }

  get title(): TranslatedText {
    return this._title;
  }

  get link(): String {
    return this._link;
  }

  get icon(): Object {
    return this._icon;
  }

  get publicFeature(): boolean {
    return this._publicFeature;
  }
}
