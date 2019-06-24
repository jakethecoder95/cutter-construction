import React from "react";

const ContactField = ({ input, meta }) => {
  const classes = (({ error, touched, submitFailed }) => {
    if ((error && touched) || (error && submitFailed)) {
      return "form-control is-invalid";
    }
    return "form-control";
  })(meta);

  const placeholder =
    input.name.charAt(0).toUpperCase() + input.name.slice(1, input.name.length);

  const attributes = {
    ...input,
    className: classes,
    placeholder
  };

  const hasError = meta.error && meta.touched;

  return (
    <div className="form-group">
      {hasError && <p className="text-danger">* {meta.error}</p>}
      {(input.name === "message" && (
        <textarea {...attributes} rows="6" resize="none" />
      )) || <input {...attributes} />}
    </div>
  );
};

export default ContactField;
