import {ApiResponseModel} from "../api/api-response.model";
import {SocialMedia} from "./social-media";
import {TranslatedText} from "../announcements/translated-text";

export class UserModel extends ApiResponseModel {

  private readonly _eduPersonAffiliation: string;
  private readonly _title: TranslatedText;
  private readonly _displayName: TranslatedText;
  private readonly _labeledURI: string;
  private readonly _secondarymail: string
  private readonly _street: TranslatedText;
  private readonly _description: TranslatedText;
  private readonly _personalTitle: string;
  private readonly _knowledgeInformation: TranslatedText;
  private readonly _telephoneNumber: string;
  private readonly _eduPersonEntitlement: TranslatedText;
  private readonly _serNumber: number;
  private readonly _socialMedia: SocialMedia;
  private readonly _profilePhoto: string;


  constructor(obj: any) {
    super(obj.id);
    this._eduPersonAffiliation = obj._eduPersonAffiliation;
    this._title = new TranslatedText(obj["title;lang-el"], obj._title);
    this._displayName = new TranslatedText(obj["displayName;lang-el"], obj._displayName);
    this._labeledURI = obj._labeledURI;
    this._knowledgeInformation = obj._knowledgeInformation;
    this._secondarymail = obj._secondarymail;
    this._description = new TranslatedText(obj["description;lang-el"], obj._description);
    this._street = new TranslatedText(obj["street;lang-el"], obj._street);
    this._personalTitle = obj._personalTitle;
    this._telephoneNumber = obj._telephoneNumber;
    this._eduPersonEntitlement = new TranslatedText(obj["eduPersonEntitlement;lang-el"], obj._eduPersonEntitlement);
    this._serNumber = obj._serNumber;
    this._socialMedia = new SocialMedia(obj._socialMedia);
    this._profilePhoto = obj._profilePhoto;
  }

  get eduPersonAffiliation(): string {
    return this._eduPersonAffiliation;
  }

  get title(): TranslatedText {
    return this._title;
  }

  get displayName(): TranslatedText {
    return this._displayName;
  }

  get labeledURI(): string {
    return this._labeledURI;
  }

  get secondarymail(): string {
    return this._secondarymail;
  }

  get street(): TranslatedText {
    return this._street;
  }

  get description(): TranslatedText {
    return this._description;
  }

  get personalTitle(): string {
    return this._personalTitle;
  }

  get knowledgeInformation(): TranslatedText {
    return this._knowledgeInformation;
  }

  get telephoneNumber(): string {
    return this._telephoneNumber;
  }

  get eduPersonEntitlement(): TranslatedText {
    return this._eduPersonEntitlement;
  }

  get serNumber(): number {
    return this._serNumber;
  }

  get socialMedia(): SocialMedia {
    return this._socialMedia;
  }

  get profilePhoto(): string {
    return this._profilePhoto;
  }
}
