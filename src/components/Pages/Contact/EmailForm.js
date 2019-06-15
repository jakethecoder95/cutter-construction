import "./EmailForm.scss";
import React from "react";

const EmailForm = props => {
  return (
    <form className="contact__form">
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Name" />
      </div>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Email" />
      </div>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Phone" />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          type="text"
          placeholder="Message"
          rows="6"
          resize="none"
        />
      </div>
      <button type="submit">SEND</button>
    </form>
  );
};

export default EmailForm;
