import "./CoverPage.scss";
import React, { Fragment } from "react";

import Header from "../Header";
import Footer from "../Footer";

const CoverPage = props => {
  return (
    <Fragment>
      <Header />
      <div className="page cover-page text-center">
        <div className="cover-page__overlay">
          <div className="cover-page__content">
            <div className="cover-page__title-0">
              <i>Welcome to</i>
            </div>
            <div className="cover-page__title-1">Cutter Construction</div>
            <p>
              For a new design or replacing your old deck. We offer a
              comprehensive solution using modern synthetic materials as well as
              wood.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CoverPage;
