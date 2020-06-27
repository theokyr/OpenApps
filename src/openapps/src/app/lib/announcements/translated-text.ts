// TODO: Ideally this will be replaced with a proper translation library in the future.
export class TranslatedText {
  private readonly _text;
  private readonly _textEn;

  constructor(text, textEn) {
    this._text = text;
    this._textEn = textEn;
  }

  get text() {
    return this._text;
  }

  get textEn() {
    return this._textEn;
  }
}
