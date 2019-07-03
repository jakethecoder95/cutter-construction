import "./CoverPage.scss";
import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const CoverPage = props => {
  return (
    <div className="page">
      <Header />
      <div className="page cover-page text-center">
        <div className="cover-page__overlay">
          <div className="cover-page__content">
            <div className="cover-page__title-0">
              <i>Welcome to</i>
            </div>
            <div className="cover-page__title-1">Cutter Construction</div>
            <h4 style={{ marginTop: "20px" }}>
              <i>We specialize in DECKS, REMODELS, and MORE!</i>
            </h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoverPage;
