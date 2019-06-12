import React from "react";

const PageContent = props => {
  return (
    <div className="container">
      <div className="grid">
        <div className="row">
          <div className="about__item col-md-3">
            <h3>EXCELLENCE AND PROFESSIONALISM</h3>
            <p>
              Here is an example paragraph expanding on the header. You can
              decide whatever you want to say here. For example, "To us,
              building is not just a job it is who we are and we cannot imagine
              doing anything else". For consistency please try to make it as
              long as this :)
            </p>
          </div>
          <div className="about__item col-md-3 col-md-offset-3">
            <h3>EXAMPLE NUMBER TWO</h3>
            <p>
              Here is an example paragraph expanding on the header. You can
              decide whatever you want to say here. For example, "To us,
              building is not just a job it is who we are and we cannot imagine
              doing anything else". For consistency please try to make it as
              long as this :)
            </p>
          </div>
          <div className="about__item col-md-3">
            <h3>EXAMPLE NUMBER THREE</h3>
            <p>
              Here is an example paragraph expanding on the header. You can
              decide whatever you want to say here. For example, "To us,
              building is not just a job it is who we are and we cannot imagine
              doing anything else". For consistency please try to make it as
              long as this :)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
