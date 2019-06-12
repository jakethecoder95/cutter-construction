import "./Banner.scss";
import React from "react";

const Banner = props => {
  return (
    <div className="banner" style={{ ...props.imageCSS }}>
      <div className="banner__overlay">
        <div className="container">
          <h1 className="banner__title">{props.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
