import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import PTBR from "./locales/pt/pt-br.json";
import ENUS from "./locales/en/en-us.json";
import FRFR from "./locales/fr/fr-fr.json";

const resources = {
	pt: PTBR,
	en: ENUS,
	fr: FRFR,
};

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources,
		fallbackLng: "en",
		detection: {
			order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
			caches: ["cookie"],
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
