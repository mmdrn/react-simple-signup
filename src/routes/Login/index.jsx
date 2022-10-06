import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

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
    if (_form.username.value.length < _form.username.minLength) {
      isValid = false;
      const errorMessage = t("login.form.username.errors.minLength", {
        value: _form.username.minLength,
      });
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

  const submit = () => {
    if (!formValidation()) return false;
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
    <div className="main-wrapper">
      <h1 className="title">{t("login.title")}</h1>
      <p className="subtitle">{t("login.subtitle")}</p>

      <div className="form">
        {Object.keys(form).map((key) => formControl(key))}
        <button type="submit" className="button" onClick={submit}>
          Sign up
        </button>
      </div>
    </div>
  );
}
