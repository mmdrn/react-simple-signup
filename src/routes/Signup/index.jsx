import "./../../assets/scss/base.scss";
import "./style.scss";
import logo from "./../../assets/images/diss-co-logo.svg";
import React from "react";

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
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
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  formControlValidationMessages(key) {
    return (
      <div className="validations">
        {this.state.form[key].errors.map((error) => (
          <p
            key={key}
            className="validation-item"
            dangerouslySetInnerHTML={{ __html: error }}
          />
        ))}
      </div>
    );
  }

  formControl(key) {
    return (
      <div
        className={`form-control ${
          this.state.form[key].errors.length > 0 ? "has-error" : ""
        }`}
        key={key}
      >
        {this.formControlValidationMessages(key)}
        <input
          type={this.state.form[key].inputType}
          id={this.state.form[key].key}
          className="control"
          autoComplete="off"
          onChange={(e) => this.handleInputChange(e, this.state.form[key].key)}
          value={this.state.form[key].value}
        />
        <label htmlFor={this.state.form[key].key} className="control-title">
          {this.state.form[key].title}
        </label>
      </div>
    );
  }

  handleInputChange(event, key) {
    const oldState = this.state.form;
    oldState[key].value = event.target.value;
    this.setState({ form: oldState });
  }

  formValidation() {
    let isValid = true;

    const form = this.state.form;
    for (const item in form) {
      form[item].errors = [];
    }

    // name validation
    if (form.name.value.length < form.name.minLength) {
      isValid = false;
      const errorMessage = `The ${form.name.title} can't be less than ${form.name.minLength} characters.`;
      form.name.errors.push(errorMessage);
    }

    if (form.name.value.length > form.name.maxLength) {
      isValid = false;
      const errorMessage = `The ${form.name.title} can't be more than ${form.name.maxLength} characters.`;
      form.name.errors.push(errorMessage);
    }

    // family validation
    if (form.family.value.length < form.family.minLength) {
      isValid = false;
      const errorMessage = `The ${form.family.title} can't be less than ${form.family.minLength} characters.`;
      form.family.errors.push(errorMessage);
    }

    if (form.family.value.length > form.family.maxLength) {
      isValid = false;
      const errorMessage = `The ${form.family.title} can't be more than ${form.family.maxLength} characters.`;
      form.family.errors.push(errorMessage);
    }

    // password validation
    const passwordRegex = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    );
    if (form.password.value.search(passwordRegex) < 0) {
      isValid = false;
      const errorMessage = `The ${form.password.title} must have \n&#8226; At least one upper case letter\n&#8226; At least one lower case letter\n&#8226; At least one digit\n&#8226; At least one special character\n&#8226; Minimum eight in length`;
      form.password.errors.push(errorMessage);
    }

    // repeat password validation
    if (form.repeatPassword.value !== form.password.value) {
      isValid = false;
      const errorMessage = `The ${form.repeatPassword.title} must be equal to the ${form.password.title}.`;
      form.repeatPassword.errors.push(errorMessage);
    }

    // address validation
    if (form.address.value.length < form.address.minLength) {
      isValid = false;
      const errorMessage = `The ${form.address.title} can't be less than ${form.address.minLength} characters.`;
      form.address.errors.push(errorMessage);
    }

    // email validation
    if (
      !String(form.email.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      isValid = false;
      const errorMessage = `The ${form.email.title} format is not valid.`;
      form.email.errors.push(errorMessage);
    }

    // phone number validation
    const phoneNumberRegex = new RegExp(
      "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
    );
    if (form.phoneNumber.value.search(phoneNumberRegex) < 0) {
      isValid = false;
      const errorMessage = `The ${form.phoneNumber.title} format is not valid.`;
      form.phoneNumber.errors.push(errorMessage);
    }

    // phone number validation
    const passportNumberRegex = new RegExp("^(?!^0+$)[a-zA-Z0-9]{3,20}$");
    if (form.passportNumber.value.search(passportNumberRegex) < 0) {
      isValid = false;
      const errorMessage = `The ${form.passportNumber.title} format is not valid.`;
      form.passportNumber.errors.push(errorMessage);
    }

    this.setState({ form: form });

    return isValid;
  }

  submit() {
    if (!this.formValidation()) return false;
  }

  render() {
    return (
      <div className="signin-page">
        <div className="container">
          <div className="wrapper">
            <header className="header">
              <figure className="logo">
                <img src={logo} alt="diss-co logo" />
              </figure>
            </header>
            <div className="main-wrapper">
              <h1 className="title">Sign up</h1>
              <p className="subtitle">Please enter your details.</p>

              <div className="form">
                {Object.keys(this.state.form).map((key) =>
                  this.formControl(key)
                )}

                <button type="submit" className="button" onClick={this.submit}>
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
}
