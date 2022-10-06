import "./style.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Login as LoginRequest } from "./../../api/auth.api";
import { toast } from "react-toastify";

export default function Login() {
  document.title = "Diss-co | Login";

  const { t } = useTranslation();
  const [form, updateForm] = useState({
    username: {
      key: "username",
      inputType: "text",
      value: "",
      minLength: 3,
      errors: [],
    },
    password: {
      key: "password",
      inputType: "password",
      minLength: 8,
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
    _form[key].value = event.target.value;

    updateForm(_form);
  };

  const formValidation = () => {
    let isValid = true;

    const _form = Object.assign({}, form);
    for (const item in _form) {
      _form[item].errors = [];
    }

    // username validation
    const phoneNumberRegex = new RegExp(
      "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
    );
    if (
      !String(_form.username.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) &&
      _form.username.value.search(phoneNumberRegex) < 0
    ) {
      isValid = false;
      const errorMessage = t("login.form.username.error");
      _form.username.errors.push(errorMessage);
    }

    // password validation
    if (_form.password.value.length < _form.password.minLength) {
      isValid = false;
      const errorMessage = t("login.form.password.error", {
        value: _form.password.minLength,
      });
      _form.password.errors.push(errorMessage);
    }

    updateForm(_form);

    return isValid;
  };

  const submit = async () => {
    if (!formValidation()) return false;

    const data = {
      username: form.username.value,
      password: form.password.value,
    };

    try {
      const response = await LoginRequest(data);

      if (response.status) {
        toast.success(response.message.description, {
          autoClose: 10000,
        });
        return true;
      } else {
        toast.error(response.message.description, {
          autoClose: 10000,
        });
        return false;
      }
    } catch (error) {
      toast.error(t("login.unexpectedError"), {
        autoClose: 10000,
      });
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
        <input
          type={form[key].inputType}
          id={form[key].key}
          className="control"
          autoComplete="off"
          onChange={(e) => handleInputChange(e, form[key].key)}
          value={form[key].value}
        />
        <label htmlFor={form[key].key} className="control-title">
          {t(`login.form.${key}.title`)}
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
    <div className="main-wrapper login-page">
      <h1 className="title">{t("login.title")}</h1>
      <p className="subtitle">{t("login.subtitle")}</p>

      <div className="form">
        {Object.keys(form).map((key) => formControl(key))}
        <button type="submit" className="button" onClick={submit}>
          {t("login.loginButton")}
        </button>
        <Link to="/signup" className="link">
          {t("login.signupLink")}
        </Link>
      </div>
    </div>
  );
}
