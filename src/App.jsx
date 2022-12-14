import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { setLanguage } from "./store/appSettings";
import router from "./router";
import "./assets/scss/base.scss";
import Header from "./components/Header";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const currentLanguage = useSelector((state) => state.appSettings.language);
  const languages = useSelector((state) => state.appSettings.languages);

  useEffect(() => {
    dispatch(
      setLanguage(languages.find((l) => l.key === i18n.resolvedLanguage))
    );
  }, [dispatch, i18n, languages]);

  return (
    <div className="App" dir={currentLanguage.dir}>
      <ToastContainer />
      <div className="container">
        <div className="wrapper">
          <Header />
          <RouterProvider router={router}></RouterProvider>
        </div>
        <div className="main-artboard"></div>
      </div>
    </div>
  );
}
