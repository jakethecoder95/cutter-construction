import React, { Fragment } from "react";

const Aside = props => {
  return (
    <Fragment>
      <div className="contact__aside">
        <h3>GET IN TOUCH!</h3>
        <div>530-401-1493</div>
        <div>test@email.com</div>
        <div>23263 Sunset Ridge Dr</div>
        <div>Auburn, CA 95602</div>
      </div>
      <div className="contact__aside">
        <h3>GET YOUR FREE QUOTE!</h3>
        <div>Just want an estimate on the job or a second opinion?</div>
        <div>Call Now: 530-401-1493</div>
      </div>
    </Fragment>
  );
};

export default Aside;
