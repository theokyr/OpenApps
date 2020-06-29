export class TranslatedText {
  private readonly _text;
  private readonly _textEn;

  constructor(text, textEn) {
    this._text = text;
    this._textEn = textEn;
  }

  // TODO: Ideally this will be replaced with a proper translation library/solution in the future.
  get value() {
    if (!this._text) {
      return this._textEn;
    }
    return this._text;
  }
}
