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
import Movies from "./Movies";
import Series from "./Series";
import Watch from "./Watch";
import Info from "./Info";
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
        <Route path="/info" children={<Info />} />
        <Route path="/series" children={<Series />} />
        <Route path="/movies" children={<Movies />} />
        <Route path="/watch" children={<Watch />} />
      </Switch>
    </Router>
  );
};

export default routing;
