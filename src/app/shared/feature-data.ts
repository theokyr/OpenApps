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
import {ApiFeatureCategoryModel} from "./api-feature-category.model";
import {faBullhorn} from "@fortawesome/free-solid-svg-icons/faBullhorn";
import {faSave} from "@fortawesome/free-solid-svg-icons/faSave";
import {faServer} from "@fortawesome/free-solid-svg-icons/faServer";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import {faPlug} from "@fortawesome/free-solid-svg-icons/faPlug";
import {faChalkboardTeacher} from "@fortawesome/free-solid-svg-icons/faChalkboardTeacher";

export class FeatureData {
  public static readonly featureSignIn = new ApiFeature(
    new TranslatedText("Σύνδεση", "Sign in"),
    "/auth/login",
    "",
    faSignInAlt,
    ApiFeatureStateModel.SignedOut);

  public static readonly featureSignOut = new ApiFeature(
    new TranslatedText("Απούνδεση", "Sign out"),
    "/auth/logout",
    "",
    faSignInAlt,
    ApiFeatureStateModel.SignedIn);

  public static readonly categories = [
    new ApiFeatureCategoryModel(
      new TranslatedText("Υπηρεσίες", "Services"),
      faBullhorn,
      [
        new ApiFeature(
          new TranslatedText("Ανακοινώσεις", "Announcements"),
          "/announcements/",
          "",
          faNewspaper,
          ApiFeatureStateModel.Public),
        new ApiFeature(
          new TranslatedText("Εικονικές Αίθουσες", "Virtual Rooms"),
          "https://rooms.iee.ihu.gr/",
          "",
          faChalkboardTeacher,
          ApiFeatureStateModel.Public),
        new ApiFeature(
          new TranslatedText("Υπηρεσία Καταλόγου", "User Catalog"),
          "/users/",
          "",
          faSearch,
          ApiFeatureStateModel.Public),
        new ApiFeature(
          new TranslatedText("Υπηρεσία SSH", "SSH Service"),
          "/ssh/",
          "",
          faServer,
          ApiFeatureStateModel.Private),
        new ApiFeature(
          new TranslatedText("Προσωπική Ιστοσελίδα", "Personal Website"),
          "/website/",
          "",
          faGlobe,
          ApiFeatureStateModel.Private),
        new ApiFeature(
          new TranslatedText("Προσωπική Βάση", "Personal Database"),
          "/database/",
          "",
          faDatabase,
          ApiFeatureStateModel.Private),
        new ApiFeature(
          new TranslatedText("Υπηρεσία VPN", "VPN Service"),
          "/vpn/",
          "",
          faPlug,
          ApiFeatureStateModel.Private)
      ]
    ),
    new ApiFeatureCategoryModel(
      new TranslatedText("Λογισμικό", "Software"),
      faSave,
      [
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
          ApiFeatureStateModel.Public)
      ]
    ),
    new ApiFeatureCategoryModel(
      new TranslatedText("Εφαρμογές", "Apps"),
      faServer,
      [
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
          ApiFeatureStateModel.Public)
      ]
    ),
    new ApiFeatureCategoryModel(
      new TranslatedText("Λογαριασμός", "Account"),
      faUser,
      [
        FeatureData.featureSignIn,
        FeatureData.featureSignOut
      ]
    )
  ]
}
