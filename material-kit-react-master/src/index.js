import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Notebook from "views/Notebook/Notebook.js";
import Skystone from "views/Robots/Skystone.js";
import UltimateGoal from "views/Robots/UltimateGoal.js";
import TBD from "views/Robots/TBD.js";
import MemberPage from "views/MemberPage/MemberPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/tbd-page" component={TBD} />
      <Route path="/skystone" component={Skystone} />
      <Route path="/ult-goal" component={UltimateGoal} />
      <Route path="/eng-notebook" component={Notebook} />
      <Route path="/blog-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/members-page" component={MemberPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
