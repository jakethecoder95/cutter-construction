import "./App.css";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import CoverPage from "./CoverPage";
import Header from "./Header";
import history from "../history";

const App = props => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" component={CoverPage} />
      </Switch>
    </Router>
  );
};

export default App;
