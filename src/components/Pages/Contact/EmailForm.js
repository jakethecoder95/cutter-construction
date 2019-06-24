import "./EmailForm.scss";
import React from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";

import ContactField from "./ContactField";
import isEmail from "./util/regexEmail";

const EmailForm = props => {
  const onSubmit = async items => {
    try {
      const result = await axios.post(
        // "http://localhost:9000/.netlify/functions/api/cutter-construction/email", // dev
        "https://robinson-endpoints.netlify.com/.netlify/functions/api/cutter-construction/email", // prod
        { ...items }
      );
      console.log(result);
    } catch (error) {
      console.log(error.result);
    }
  };

  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!isEmail(values.email)) {
      errors.email = "Invalid email";
    }
    if (!values.phone) {
      errors.phone = "Required";
    } else if (values.phone.length < 10) {
      errors.phone = "Not long enough, be sure to include the area code";
    } else if (values.phone.length > 16) {
      errors.phone = "Invalid USA phone number";
    }
    if (!values.subject) {
      errors.subject = "Required";
    }
    if (!values.message) {
      errors.message = "Required";
    }

    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, pristine, invalid, errors }) => (
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <Field component={ContactField} name="name" />
          </div>
          <div className="form-group">
            <Field component={ContactField} name="email" />
          </div>
          <div className="form-group">
            <Field component={ContactField} name="phone" />
          </div>
          <div className="form-group">
            <Field component={ContactField} name="subject" />
          </div>
          <div className="form-group">
            <Field component={ContactField} name="message" />
          </div>
          <button type="submit">SEND</button>
        </form>
      )}
    />
  );
};

export default EmailForm;
