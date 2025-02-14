import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import Maintenance from "src/views/errors/Maintenance.jsx";
import { Toaster } from "react-hot-toast";
import withClearCache from "./ClearCache";

import "src/Calendar.css";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Maintenance} />
          </Switch>
        </Router>
        <Toaster />
      </div>
    );
  }
}

export default withRouter(withClearCache(App));
