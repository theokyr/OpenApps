import {SocialMediaExtra} from "./social-media-extra";

export class SocialMedia {
  private readonly _socialMediaExtra: SocialMediaExtra[];
  private readonly _facebook: string;
  private readonly _twitter: string;
  private readonly _github: string;
  private readonly _googlePlus: string;
  private readonly _linkedIn: string;
  private readonly _researchGate: string;
  private readonly _microsoftAcademic: string;
  private readonly _googleScholarID: string;
  private readonly _orcid: string;
  private readonly _researchID: string;
  private readonly _scopusID: string;

  constructor(obj: any) {
    this._socialMediaExtra = [];
    obj._socialMediaExtra.forEach(extra => {
      this._socialMediaExtra.push(new SocialMediaExtra(extra));
    });
    this._facebook = obj._facebook;
    this._twitter = obj._twitter;
    this._github = obj._github;
    this._googlePlus = obj._googlePlus;
    this._linkedIn = obj._linkedIn;
    this._researchGate = obj._researchGate;
    this._microsoftAcademic = obj._microsoftAcademic;
    this._googleScholarID = obj._googleScholarID;
    this._orcid = obj._orcid;
    this._researchID = obj._researchID;
    this._scopusID = obj._scopusID;
  }

  get socialMediaExtra(): SocialMediaExtra[] {
    return this._socialMediaExtra;
  }

  get facebook(): string {
    return this._facebook;
  }

  get twitter(): string {
    return this._twitter;
  }

  get github(): string {
    return this._github;
  }

  get googlePlus(): string {
    return this._googlePlus;
  }

  get linkedIn(): string {
    return this._linkedIn;
  }

  get researchGate(): string {
    return this._researchGate;
  }

  get microsoftAcademic(): string {
    return this._microsoftAcademic;
  }

  get googleScholarID(): string {
    return this._googleScholarID;
  }

  get orcid(): string {
    return this._orcid;
  }

  get researchID(): string {
    return this._researchID;
  }

  get scopusID(): string {
    return this._scopusID;
  }
}
