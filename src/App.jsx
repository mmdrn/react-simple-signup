import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { setLanguage } from "./store/appSettings";
import router from "./router";
import "./assets/scss/base.scss";
import Header from "./components/header";
import React from "react";

export default function App() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const currentLanguage = useSelector((state) => state.appSettings.language);
  
  const languages = useSelector((state) => state.appSettings.languages);
  dispatch(setLanguage(languages.find((l) => l.key === i18n.resolvedLanguage)));

  return (
    <div className="App" dir={currentLanguage.dir}>
      <div className="container">
        <div className="wrapper">
          <Header />
          <RouterProvider router={router}></RouterProvider>
        </div>
        <div className="artboard"></div>
      </div>
    </div>
  );
}
