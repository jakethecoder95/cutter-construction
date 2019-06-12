import "./App.scss";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import CoverPage from "./CoverPage";
import About from "./Pages/About";
import history from "../history";

const App = props => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={CoverPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" />
        <Route exact path="/gallery" />
        <Route exact path="/contact" />
        <Route>
          <h1 style={{ color: "#fff", margin: "auto 20px 3rem 20px" }}>
            404 Error: Page not found
          </h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
