import {ApiFeature} from "../../../shared/api-feature.model";
import {TranslatedText} from "../../../lib/announcements/translated-text";
import {faNewspaper} from "@fortawesome/free-solid-svg-icons/faNewspaper";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faWindowMaximize} from "@fortawesome/free-solid-svg-icons/faWindowMaximize";
import {faWindows} from "@fortawesome/free-brands-svg-icons/faWindows";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";
import {faDesktop} from "@fortawesome/free-solid-svg-icons/faDesktop";

export class Features {

  public static readonly features = [
    new ApiFeature(
      new TranslatedText("Ανακοινώσεις", "Announcements"),
      "/announcements/",
      "",
      faNewspaper,
      true),
    new ApiFeature(
      new TranslatedText("Υπηρεσία Καταλόγου", "User Catalog"),
      "/users/",
      "",
      faSearch,
      true),
    new ApiFeature(
      new TranslatedText("Λογισμικό από Kivuto (πρώην MS-Imagine)", "Kivuto Software (previously MS-Imagine)"),
      "https://e5.onthehub.com/WebStore/ProductsByMajorVersionList.aspx?ws=be0fe910-869b-e011-969d-0030487d8897",
      "https://imselab-atei-thessaloniki.weebly.com/ms-imagine-gr.html",
      faWindowMaximize,
      true),
    new ApiFeature(
      new TranslatedText("Λογισμικό από Microsoft (και άλλες υπηρεσίες όπως VMs)", "Microsoft Software (and other services such as VMs)"),
      "https://imselab-atei-thessaloniki.weebly.com/ms-azure-gr.html",
      "",
      faWindows,
      true),
    new ApiFeature(
      new TranslatedText("Σύστημα Ανάθεσης Πτυχιακών", "Thesis Assignment Service"),
      "https://thesis.iee.ihu.gr/",
      "",
      faBook,
      true),
    new ApiFeature(
      new TranslatedText("IT API", "IT API"),
      "https://login.it.teithe.gr/",
      "",
      faCode,
      true),
    new ApiFeature(
      new TranslatedText("Έλεγχος 160 ΠΜ", "160 Credits Check"),
      "https://www.iee.ihu.gr/ects160/",
      "",
      faDesktop,
      true),
  ];
}
