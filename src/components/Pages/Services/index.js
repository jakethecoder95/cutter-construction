import "../PageContent.scss";
import React from "react";

import Header from "../../Header";
import Footer from "../../Footer";
import Banner from "../../Banner";
import ServicesContent from "./ServicesContent";

const imageCSS = {
  background:
    "url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
  backgroundPosition: "0 30%"
};

const Services = props => {
  return (
    <div className="page">
      <Header />
      <Banner title="Services" imageCSS={imageCSS} />
      <div className="page-content">
        <ServicesContent />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
