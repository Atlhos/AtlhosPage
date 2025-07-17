// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HomePT from "./languages/pt.json";
import HomeEN from "./languages/en.json";
import HomeES from "./languages/es.json";

i18n
    .use(initReactI18next)
    .init({
    fallbackLng: "PT",
    lng: "PT",
    debug: true,
    interpolation: {
        escapeValue: false,
    },
    resources: {
        PT: {
            home: HomePT,
        },
        EN: {
            home: HomeEN,
        },
        ES:{
            home: HomeES
        }
    },
});

export default i18n;
