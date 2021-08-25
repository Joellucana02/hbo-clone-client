import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import Play from "./play";
import Me from "./me";

const routing = () => {
  const user = true;
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/play" children={<Play />} />
        <Route path="/register" children={<Register />} />
        <Route path="/login" children={<Login />} />
        <Route path="/me" children={<Me />} />
      </Switch>
    </Router>
  );
};

export default routing;
