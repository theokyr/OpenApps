import {Publisher} from "./publisher";
import {TranslatedText} from "./translated-text";
import {ApiResponseModel} from "../api/api-response.model";

export class AnnouncementModel extends ApiResponseModel {
  private readonly _publisher: Publisher;
  private readonly _text: TranslatedText;
  private readonly _title: TranslatedText;
  private readonly _date: Date;
  private readonly _attachments: string;
  private readonly _categoryId: string;

  constructor(obj: any) {
    super(obj._id);
    this._categoryId = obj._about;
    this._title = new TranslatedText(obj.title, obj.titleEn);
    this._text = new TranslatedText(obj.text, obj.textEn);
    this._publisher = new Publisher(obj.publisher.id, obj.publisher.name);
    this._date = new Date(obj.date);
    this._attachments = obj.attachments;
  }

  get publisher(): Publisher {
    return this._publisher;
  }

  get text(): TranslatedText {
    return this._text;
  }

  get title(): TranslatedText {
    return this._title;
  }

  get date(): Date {
    return this._date;
  }

  get attachments(): string {
    return this._attachments;
  }

  get categoryId(): string {
    return this._categoryId;
  }
}
