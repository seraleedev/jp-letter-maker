import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import ko from "../locale/ko.json";
import ja from "../locale/ja.json";
i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { ko: { translation: ko }, ja: { translation: ja } },
    lng: "ko",
    fallbackLng: "ko",
    debug: true,
    interpolation: { escapeValue: false },
  });
export default i18n;
