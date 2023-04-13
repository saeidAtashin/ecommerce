import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "/node_modules/flag-icons/css/flag-icons.min.css";

i18n
  .use(initReactI18next)

  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fa"],

    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const container = document.getElementById("root");
const root = createRoot(container);
const loadingMarkup = (
  <>
    <div className="container-xxl">
      <div className="row align-items-center justify-content-center">
        <img className="col-3 " src="/images/Infinity-1.svg"/>
        </div>
      </div>
  </>
);

root.render(
  <Suspense fallback={loadingMarkup}>
    <App />
  </Suspense>
);
