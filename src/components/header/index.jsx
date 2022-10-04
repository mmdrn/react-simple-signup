import "./style.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "./../../assets/images/diss-co-logo.svg";
import { setLanguage } from "../../store/appSettings";
import { useTranslation } from "react-i18next";

export default function Header() {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.appSettings.languages);
  const currentLanguage = useSelector((state) => state.appSettings.language);
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
  };

  return (
    <header className="header">
      <figure className="logo">
        <img src={logo} alt="diss-co logo" />
      </figure>

      <div className="languages">
        {languages.map((language) => (
          <span
            onClick={() => handleChangeLanguage(language.key)}
            disabled={i18n.resolvedLanguage === language.key}
            key={language.key}
            className={`item ${
              language.key === currentLanguage ? "active" : ""
            }`}
          >
            {language.title}
          </span>
        ))}
      </div>
    </header>
  );
}
