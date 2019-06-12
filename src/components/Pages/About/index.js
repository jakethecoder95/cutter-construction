import "./About.scss";
import React, { Fragment } from "react";

import Banner from "../../Banner";

const imageCSS = {
  background:
    "url(https://images.unsplash.com/photo-1482455480256-f49706deb391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
};

const About = props => {
  return (
    <Fragment>
      <Banner title="About Us" imageCSS={imageCSS} />
      <div className="about__page-content">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="about__item col-md-4">
                <h3>EXCELLENCE AND PROFESSIONALISM</h3>
                <p>
                  Here is an example paragraph expanding on the header. You can
                  decide whatever you want to say here. For example, "To us,
                  building is not just a job it is who we are and we cannot
                  imagine doing anything else". For consistency please try to
                  make it as long as this :)
                </p>
              </div>
              <div className="about__item col-md-4">
                <h3>EXAMPLE NUMBER TWO</h3>
                <p>
                  Here is an example paragraph expanding on the header. You can
                  decide whatever you want to say here. For example, "To us,
                  building is not just a job it is who we are and we cannot
                  imagine doing anything else". For consistency please try to
                  make it as long as this :)
                </p>
              </div>
              <div className="about__item col-md-4">
                <h3>EXAMPLE NUMBER THREE</h3>
                <p>
                  Here is an example paragraph expanding on the header. You can
                  decide whatever you want to say here. For example, "To us,
                  building is not just a job it is who we are and we cannot
                  imagine doing anything else". For consistency please try to
                  make it as long as this :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
