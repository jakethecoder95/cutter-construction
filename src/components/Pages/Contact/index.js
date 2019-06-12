import React from "react";

import Header from "../../Header";
import Footer from "../../Footer";
import Banner from "../../Banner";

const imageCSS = {
  background:
    "url(https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
  backgroundPosition: "0 40%",
  boxShadow: "inset 0 0 700px #000000"
};

const Contact = props => {
  return (
    <div className="page">
      <Header />
      <Banner title="Contact" imageCSS={imageCSS} />
      <Footer />
    </div>
  );
};

export default Contact;
