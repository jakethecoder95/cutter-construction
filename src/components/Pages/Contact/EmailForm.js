import "./EmailForm.scss";
import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";

import ContactField from "./ContactField";
import isEmail from "./util/regexEmail";

const EmailForm = props => {
  const [submitting, setSubmitting] = useState(false);
  const [emailResponse, setEmailResponse] = useState("");

  const onSubmit = async items => {
    setSubmitting(true);
    try {
      const response = await axios.post(
        // "http://localhost:9000/.netlify/functions/api/cutter-construction/email", // dev
        "https://robinson-endpoints.netlify.com/.netlify/functions/api/cutter-construction/email", // prod
        { ...items }
      );
      setEmailResponse("success");
      console.log(response);
    } catch (error) {
      setEmailResponse("error");
      console.log(error.response);
    }
    setSubmitting(false);
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
      render={({ handleSubmit, form }) => (
        <form
          className="contact__form"
          onSubmit={async e => {
            await handleSubmit(e);
            form.reset();
          }}
        >
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
          <button type="submit" disabled={submitting}>
            {(submitting && (
              <div>
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                />
                SENDING...
              </div>
            )) || <span>SEND</span>}
          </button>
          {emailResponse === "success" && (
            <div className="alert alert-success" role="alert">
              Success! Your email was sent. We will get back to you soon.
            </div>
          )}
          {emailResponse === "error" && (
            <div className="alert alert-error" role="alert">
              Error: There was an issue there.{" "}
              <a href="mailto:cuttercon11@gmail.com">
                Try manually emailing us.
              </a>
            </div>
          )}
        </form>
      )}
    />
  );
};

export default EmailForm;
