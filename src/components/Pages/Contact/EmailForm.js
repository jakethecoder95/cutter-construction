import "./EmailForm.scss";
import React from "react";
import { Form, Field } from "react-final-form";

import server from "../../../api/server";

const EmailForm = props => {
  const onSubmit = async items => {
    try {
      const result = await server.post(
        "http://robinson-endpoints.netlify.com/.netlify/functions/api/cutter-construction/email",
        { ...items }
      );
      console.log(result);
    } catch (error) {
      console.log(error.result);
    }
  };

  const validate = values => {};

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, pristine, invalid }) => (
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <Field
              component="input"
              className="form-control"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <Field
              component="input"
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <Field
              component="input"
              name="phone"
              className="form-control"
              type="text"
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <Field
              component="input"
              name="subject"
              className="form-control"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <Field
              component="textarea"
              name="message"
              className="form-control"
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
