export class TranslatedText {
  private readonly _text;
  private readonly _textEn;

  constructor(text, textEn) {
    this._text = text;
    this._textEn = textEn;
  }

  // TODO: Ideally this will be replaced with a proper translation library/solution in the future.
  get value() {
    return this._text;
  }
}
