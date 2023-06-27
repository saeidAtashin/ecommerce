import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "/node_modules/flag-icons/css/flag-icons.min.css";
// import store from "./redux/store";

// import { store } from "./toolkit/store";

import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";

import productReducer, { productFetch } from "./toolkit/features/productsSlice";
import { productApi } from "./toolkit/features/productApi";
import cartSlice, { getTotals } from "./toolkit/features/cartSlice";

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
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productApi.middleware);
  },
});

store.dispatch(productFetch());
store.dispatch(getTotals());

const container = document.getElementById("root");
const root = createRoot(container);
const loadingMarkup = (
  <>
    <div className="container-sm">
      <div className="row align-items-center justify-content-center middle-page">
        <img className="col-3 " src="/images/Infinity-1.svg" />
      </div>
    </div>
  </>
);

root.render(
  <Provider store={store}>
    <Suspense fallback={loadingMarkup}>
      <App />
    </Suspense>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();