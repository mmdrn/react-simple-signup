import "./style.scss";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Signup() {
  document.title = "Diss-co | Signup";
  const { t } = useTranslation();
  const [form, updateForm] = useState({
    name: {
      key: "name",
      inputType: "text",
      value: "",
      minLength: 3,
      maxLength: 10,
      errors: [],
    },
    family: {
      key: "family",
      inputType: "text",
      value: "",
      minLength: 3,
      maxLength: 10,
      errors: [],
    },
    password: {
      key: "password",
      inputType: "password",
      minLength: 8,
      value: "",
      errors: [],
    },
    repeatPassword: {
      key: "repeatPassword",
      inputType: "password",
      value: "",
      errors: [],
    },
    address: {
      key: "address",
      inputType: "text",
      value: "",
      minLength: 3,
      errors: [],
    },
    email: {
      key: "email",
      inputType: "text",
      value: "",
      errors: [],
    },
    phoneNumber: {
      key: "phoneNumber",
      inputType: "text",
      value: "",
      errors: [],
    },
    passportNumber: {
      key: "passportNumber",
      inputType: "text",
      value: "",
      errors: [],
    },
    image: {
      key: "image",
      inputType: "file",
      accept: "image/png, image/jpeg",
      maxSize: 2, //MB
      value: "",
      errors: [],
    },
  });
  const currentLanguage = useSelector((state) => state.appSettings.language);

  useEffect(() => {
    const _form = Object.assign({}, form);
    for (const item in _form) {
      _form[item].errors = [];
      _form[item].value = "";
    }

    updateForm(_form);
    // eslint-disable-next-line
  }, [currentLanguage]);

  const handleInputChange = (event, key) => {
    const _form = Object.assign({}, form);

    if (form[key].inputType !== "file") {
      _form[key].value = event.target.value;
    } else {
      if (event.target.files.length > 0) {
        _form[key].value = event.target.files[0];
      }
    }
    updateForm(_form);
  };

  const formValidation = () => {
    let isValid = true;

    const _form = Object.assign({}, form);
    for (const item in _form) {
      _form[item].errors = [];
    }

    // name validation
    if (_form.name.value.length < _form.name.minLength) {
      isValid = false;
      const errorMessage = t("signup.form.name.errors.minLength", {
        value: _form.name.minLength,
      });
      _form.name.errors.push(errorMessage);
    }

    if (_form.name.value.length > _form.name.maxLength) {
      isValid = false;
      const errorMessage = t("signup.form.name.errors.maxLength", {
        value: _form.name.maxLength,
      });
      _form.name.errors.push(errorMessage);
    }

    // family validation
    if (_form.family.value.length < _form.family.minLength) {
      isValid = false;
      const errorMessage = t("signup.form.family.errors.minLength", {
        value: _form.name.minLength,
      });
      _form.family.errors.push(errorMessage);
    }

    if (_form.family.value.length > _form.family.maxLength) {
      isValid = false;
      const errorMessage = t("signup.form.family.errors.maxLength", {
        value: _form.name.maxLength,
      });
      _form.family.errors.push(errorMessage);
    }

    // password validation
    const passwordRegex = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    );
    if (_form.password.value.search(passwordRegex) < 0) {
      isValid = false;
      const errorMessage = t("signup.form.password.error");
      _form.password.errors.push(errorMessage);
    }

    // repeat password validation
    if (_form.repeatPassword.value !== _form.password.value) {
      isValid = false;
      const errorMessage = t("signup.form.repeatPassword.error");
      _form.repeatPassword.errors.push(errorMessage);
    }

    // address validation
    if (_form.address.value.length < _form.address.minLength) {
      isValid = false;
      const errorMessage = t("signup.form.address.error", {
        value: _form.address.minLength,
      });
      _form.address.errors.push(errorMessage);
    }

    // email validation
    if (
      !String(_form.email.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      isValid = false;
      const errorMessage = t("signup.form.email.error");
      _form.email.errors.push(errorMessage);
    }

    // phone number validation
    const phoneNumberRegex = new RegExp(
      "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
    );
    if (_form.phoneNumber.value.search(phoneNumberRegex) < 0) {
      isValid = false;
      const errorMessage = t("signup.form.phoneNumber.error");
      _form.phoneNumber.errors.push(errorMessage);
    }

    // phone number validation
    const passportNumberRegex = new RegExp("^(?!^0+$)[a-zA-Z0-9]{3,20}$");
    if (_form.passportNumber.value.search(passportNumberRegex) < 0) {
      isValid = false;
      const errorMessage = t("signup.form.passportNumber.error");
      _form.passportNumber.errors.push(errorMessage);
    }

    // image validation
    if (!_form.image.value) {
      isValid = false;
      const errorMessage = t("signup.form.image.errors.required");
      _form.image.errors.push(errorMessage);
    } else {
      const bytes = require("bytes");
      if (
        _form.image.value &&
        _form.image.value.size &&
        parseFloat(bytes(_form.image.value.size, { unit: "mb" })) >
          _form.image.maxSize
      ) {
        isValid = false;
        const errorMessage = t("signup.form.image.errors.maximumSize");
        _form.image.errors.push(errorMessage);
      }
    }

    updateForm(_form);

    return isValid;
  };

  const submit = () => {
    if (!formValidation()) return false;
  };

  const handleInput = (key) => {
    if (form[key].inputType !== "file") {
      return (
        <input
          type={form[key].inputType}
          id={form[key].key}
          className="control"
          autoComplete="off"
          onChange={(e) => handleInputChange(e, form[key].key)}
          value={form[key].value}
        />
      );
    } else {
      return (
        <label className="file-selector-wrapper">
          <span className="selector" htmlFor={form[key].key}>
            Select
          </span>
          <span className="file-name">{form[key].value.name}</span>
          <input
            type={form[key].inputType}
            id={form[key].key}
            className="control"
            autoComplete="off"
            accept={form[key].accept}
            onChange={(e) => handleInputChange(e, form[key].key)}
          />
        </label>
      );
    }
  };

  const formControl = (key) => {
    return (
      <div
        className={`form-control ${
          (form[key].errors.length > 0 ? "has-error" : "",
          form[key].inputType === "file" ? "file" : "")
        }`}
        key={key}
      >
        {formControlValidationMessages(key)}
        {handleInput(key)}
        <label htmlFor={form[key].key} className="control-title">
          {t(`signup.form.${key}.title`)}
        </label>
      </div>
    );
  };

  const formControlValidationMessages = (key) => {
    return (
      <div className="validations">
        {form[key].errors.map((error) => (
          <p
            key={key}
            className="validation-item"
            dangerouslySetInnerHTML={{ __html: error }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="main-wrapper signin-page">
      <h1 className="title">{t("signup.title")}</h1>
      <p className="subtitle">{t("signup.subtitle")}</p>

      <div className="form">
        {Object.keys(form).map((key) => formControl(key))}
        <button type="submit" className="button" onClick={submit}>
          {t("signup.signupButton")}
        </button>
        <Link to="/login" className="link">
          {t("signup.loginLink")}
        </Link>
      </div>
    </div>
  );
}
