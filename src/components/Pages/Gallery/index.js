import React from "react";

import Header from "../../Header";
import Footer from "../../Footer";
import Banner from "../../Banner";

const imageCSS = {
  background:
    "url(https://images.unsplash.com/photo-1477058267562-6f70f44288a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)",
  backgroundPosition: "bottom"
};

const Gallery = props => {
  return (
    <div className="page">
      <Header />
      <Banner title="Gallery" imageCSS={imageCSS} />
      <Footer />
    </div>
  );
};

export default Gallery;
