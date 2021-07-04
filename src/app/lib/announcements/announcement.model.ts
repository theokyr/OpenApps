import {TranslatedText} from "./translated-text";
import {ApiResponseModel} from "../api/api-response.model";
import {CategoryModel} from "../categories/category.model";
import {Publisher} from "./publisher";

export class AnnouncementModel extends ApiResponseModel {
  private readonly _publisher: Publisher;
  private readonly _text: TranslatedText;
  private readonly _title: TranslatedText;
  private readonly _date: Date;
  private readonly _attachments: string;
  private readonly _categoryId: string;
  private _category: CategoryModel;


  constructor(id: String, publisher: Publisher, text: TranslatedText, title: TranslatedText, date: Date, attachments: string, categoryId: string) {
    super(id);
    this._publisher = publisher;
    this._text = text;
    this._title = title;
    this._date = date;
    this._attachments = attachments;
    this._categoryId = categoryId;
  }

  public static from(obj: any) {
    return new AnnouncementModel(obj._id,
      new Publisher(obj.publisher.id, obj.publisher.name),
      new TranslatedText(obj.title, obj.titleEn),
      new TranslatedText(obj.text, obj.textEn),
      new Date(obj.date),
      obj._about,
      obj.attachments);
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

  get category(): CategoryModel {
    return this._category;
  }

  set category(value: CategoryModel) {
    this._category = value;
  }
}
