import React, { Fragment } from "react";

const Aside = props => {
  return (
    <Fragment>
      <div className="contact__aside">
        <h3>GET IN TOUCH!</h3>
        <div>530-401-5084</div>
        <div>cuttercon11@gmail.com</div>
        <div>10042 Wolf Rd. Suite B</div>
        <div>Grass Valley, CA 95949</div>
      </div>
      <div className="contact__aside">
        <h3>GET YOUR FREE QUOTE!</h3>
        <div>Just want an estimate on the job or a second opinion?</div>
        <div>Call Now: 530-401-5084</div>
      </div>
    </Fragment>
  );
};

export default Aside;
