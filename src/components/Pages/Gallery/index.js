import "./Gallery.scss";
import React from "react";

import Header from "../../Header";
import Footer from "../../Footer";
import Banner from "../../Banner";
import GalleryContent from "./GalleryContent";

const imageCSS = {
  background:
    "url(https://images.unsplash.com/photo-1515857090479-6a2d61847629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)",
  backgroundPosition: "bottom"
};

const Gallery = props => {
  return (
    <div className="page">
      <Header />
      <Banner title="Gallery" imageCSS={imageCSS} />
      <GalleryContent />
      <Footer />
    </div>
  );
};

export default Gallery;
