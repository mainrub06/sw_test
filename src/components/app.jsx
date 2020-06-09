import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { LINKS } from "../const";
import history from "../history";

import MainScreen from "./main-screen.jsx";
import PersonScreen from "./person-screen.jsx";

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={LINKS.MAIN} component={MainScreen} />
      <Route exact path={`${LINKS.PERSON}/:id`} component={PersonScreen} />
    </Switch>
  </Router>
);

export default App;
