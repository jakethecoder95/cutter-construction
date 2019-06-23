import "./EmailForm.scss";
import React from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";

const EmailForm = props => {
  const onSubmit = async items => {
    try {
      const result = await axios.post(
        "http://localhost:9000/.netlify/functions/api/cutter-construction/email", // dev
        // "https://robinson-endpoints.netlify.com/.netlify/functions/api/cutter-construction/email", // prod
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
    }
    if (!values.phone) {
      errors.phone = "Required";
    }
    if (!values.subject) {
      errors.subject = "Required";
    }
    if (!values.message) {
      errors.message = "Required";
    }

    return errors;
  };

  const hasError = bool => {
    console.log(bool);
    return bool ? "form-control error" : "form-control";
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, pristine, invalid, errors }) => (
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <Field
              component="input"
              className={hasError(errors.name)}
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <Field
              component="input"
              className={hasError(errors.email)}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <Field
              component="input"
              name="phone"
              className={hasError(errors.phone)}
              type="text"
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <Field
              component="input"
              name="subject"
              className={hasError(errors.subjec)}
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <Field
              component="textarea"
              name="message"
              className={hasError(errors.message)}
              type="text"
              placeholder="Message"
              rows="6"
              resize="none"
            />
          </div>
          <button type="submit" disabled={pristine || invalid}>
            SEND
          </button>
        </form>
      )}
    />
  );
};

export default EmailForm;
