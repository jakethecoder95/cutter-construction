import "./About.scss";
import React, { Fragment } from "react";

import Banner from "../../Banner";
import Header from "../../Header";
import Footer from "../../Footer";
import PageContent from "./PageContent";

const imageCSS = {
  background:
    "url(https://images.unsplash.com/photo-1482455480256-f49706deb391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
};

const About = props => {
  return (
    <Fragment>
      <Header />
      <Banner title="About Us" imageCSS={imageCSS} />
      <div className="about__page-content">
        <PageContent />
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
