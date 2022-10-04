import "./../../assets/scss/base.scss";
import "./style.scss";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function Signup() {
  const [form, updateForm] = useState({
    name: {
      key: "name",
      title: "Name",
      inputType: "text",
      value: "",
      minLength: 3,
      maxLength: 10,
      errors: [],
    },
    family: {
      key: "family",
      title: "Family",
      inputType: "text",
      value: "",
      minLength: 3,
      maxLength: 10,
      errors: [],
    },
    password: {
      key: "password",
      title: "Password",
      inputType: "password",
      minLength: 8,
      value: "",
      errors: [],
    },
    repeatPassword: {
      key: "repeatPassword",
      title: "Repeat Password",
      inputType: "password",
      value: "",
      errors: [],
    },
    address: {
      key: "address",
      title: "Address",
      inputType: "text",
      value: "",
      minLength: 3,
      errors: [],
    },
    email: {
      key: "email",
      title: "Email",
      inputType: "text",
      value: "",
      errors: [],
    },
    phoneNumber: {
      key: "phoneNumber",
      title: "Phone Number",
      inputType: "text",
      value: "",
      errors: [],
    },
    passportNumber: {
      key: "passportNumber",
      title: "Passport Number",
      inputType: "text",
      value: "",
      errors: [],
    },
  });
  const { t } = useTranslation();
  const currentLanguage = useSelector((state) => state.appSettings.language);

  useEffect(() => {
    console.log(currentLanguage);
  }, [currentLanguage]);

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

  const formControl = (key) => {
    return (
      <div
        className={`form-control ${
          form[key].errors.length > 0 ? "has-error" : ""
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
          {form[key].title}
        </label>
      </div>
    );
  };

  const handleInputChange = (event, key) => {
    const oldForm = Object.assign({}, form);
    oldForm[key].value = event.target.value;
    updateForm(oldForm);
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
      const errorMessage = `The ${_form.family.title} can't be less than ${_form.family.minLength} characters.`;
      _form.family.errors.push(errorMessage);
    }

    if (_form.family.value.length > _form.family.maxLength) {
      isValid = false;
      const errorMessage = `The ${_form.family.title} can't be more than ${_form.family.maxLength} characters.`;
      _form.family.errors.push(errorMessage);
    }

    // password validation
    const passwordRegex = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    );
    if (_form.password.value.search(passwordRegex) < 0) {
      isValid = false;
      const errorMessage = `The ${_form.password.title} must have \n&#8226; At least one upper case letter\n&#8226; At least one lower case letter\n&#8226; At least one digit\n&#8226; At least one special character\n&#8226; Minimum eight in length`;
      _form.password.errors.push(errorMessage);
    }

    // repeat password validation
    if (_form.repeatPassword.value !== _form.password.value) {
      isValid = false;
      const errorMessage = `The ${_form.repeatPassword.title} must be equal to the ${_form.password.title}.`;
      _form.repeatPassword.errors.push(errorMessage);
    }

    // address validation
    if (_form.address.value.length < _form.address.minLength) {
      isValid = false;
      const errorMessage = `The ${_form.address.title} can't be less than ${_form.address.minLength} characters.`;
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
      const errorMessage = `The ${_form.email.title} format is not valid.`;
      _form.email.errors.push(errorMessage);
    }

    // phone number validation
    const phoneNumberRegex = new RegExp(
      "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
    );
    if (_form.phoneNumber.value.search(phoneNumberRegex) < 0) {
      isValid = false;
      const errorMessage = `The ${_form.phoneNumber.title} format is not valid.`;
      _form.phoneNumber.errors.push(errorMessage);
    }

    // phone number validation
    const passportNumberRegex = new RegExp("^(?!^0+$)[a-zA-Z0-9]{3,20}$");
    if (_form.passportNumber.value.search(passportNumberRegex) < 0) {
      isValid = false;
      const errorMessage = `The ${_form.passportNumber.title} format is not valid.`;
      _form.passportNumber.errors.push(errorMessage);
    }

    updateForm(_form);

    return isValid;
  };

  const submit = () => {
    if (!formValidation()) return false;
  };

  return (
    <div className="signin-page">
      <div className="container">
        <div className="wrapper">
          <Header />
          <div className="main-wrapper">
            <h1 className="title">{t("signup.title")}</h1>
            <p className="subtitle">{t("signup.subtitle")}</p>

            <div className="form">
              {Object.keys(form).map((key) => formControl(key))}
              <button type="submit" className="button" onClick={submit}>
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="artboard"></div>
      </div>
    </div>
  );
}
