import {ApiFeature} from "./api-feature.model";
import {TranslatedText} from "../lib/announcements/translated-text";
import {faNewspaper} from "@fortawesome/free-solid-svg-icons/faNewspaper";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faWindowMaximize} from "@fortawesome/free-solid-svg-icons/faWindowMaximize";
import {faWindows} from "@fortawesome/free-brands-svg-icons/faWindows";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";
import {faDesktop} from "@fortawesome/free-solid-svg-icons/faDesktop";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import {ApiFeatureStateModel} from "./api-feature-state.model";

export class Features {
  public static readonly featureSignIn = new ApiFeature(
    new TranslatedText("Σύνδεση", "Sign in"),
    "/signin/",
    "",
    faSignInAlt,
    ApiFeatureStateModel.SignedOut);

  public static readonly featureSignOut = new ApiFeature(
    new TranslatedText("Απούνδεση", "Sign out"),
    "/signout/",
    "",
    faSignInAlt,
    ApiFeatureStateModel.SignedIn);

  public static readonly features = [
    new ApiFeature(
      new TranslatedText("Ανακοινώσεις", "Announcements"),
      "/announcements/",
      "",
      faNewspaper,
      ApiFeatureStateModel.Public),
    new ApiFeature(
      new TranslatedText("Υπηρεσία Καταλόγου", "User Catalog"),
      "/users/",
      "",
      faSearch,
      ApiFeatureStateModel.Public),
    new ApiFeature(
      new TranslatedText("Λογισμικό από Kivuto", "Software from Kivuto"),
      "https://e5.onthehub.com/WebStore/ProductsByMajorVersionList.aspx?ws=be0fe910-869b-e011-969d-0030487d8897",
      "https://imselab-atei-thessaloniki.weebly.com/ms-imagine-gr.html",
      faWindowMaximize,
      ApiFeatureStateModel.Public),
    new ApiFeature(
      new TranslatedText("Λογισμικό & υπηρεσίες από Microsoft", "Software and services from Microsoft"),
      "https://imselab-atei-thessaloniki.weebly.com/ms-azure-gr.html",
      "",
      faWindows,
      ApiFeatureStateModel.Public),
    new ApiFeature(
      new TranslatedText("Σύστημα Ανάθεσης Πτυχιακών", "Thesis Assignment Service"),
      "https://thesis.iee.ihu.gr/",
      "",
      faBook,
      ApiFeatureStateModel.Public),
    new ApiFeature(
      new TranslatedText("IT API", "IT API"),
      "https://login.it.teithe.gr/",
      "",
      faCode,
      ApiFeatureStateModel.Public),
    new ApiFeature(
      new TranslatedText("Έλεγχος 160 ΠΜ", "160 Credits Check"),
      "https://www.iee.ihu.gr/ects160/",
      "",
      faDesktop,
      ApiFeatureStateModel.Public),
  ];
}
