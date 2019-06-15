import React from "react";

import EmailForm from "./EmailForm";
import Aside from "./Aside";
import Map from "./Map";

const ContactContent = props => {
  return (
    <div className="page-content contact__page-content">
      <div className="container">
        <h2 className="promo-header">
          Lets get in touch! Send us an email or give us a call.
        </h2>
        <div className="grid">
          <div className="row">
            <div className="email-container col-lg-7">
              <EmailForm />
            </div>
            <div className="col-lg-4">
              <Aside />
            </div>
          </div>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default ContactContent;
