import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import Register from "./Register";
import Play from "./Play";
import Movies from "./Movies";
import Series from "./Series";
import Watch from "./Watch";
import { AuthContext } from "../context/AuthContext";

const Routing = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        {console.log(user)}
        <Route exact path="/">
          {user ? <Redirect to="/play" /> : <Home />}
        </Route>

        <Route path="/login">
          {user ? <Redirect to="/play" /> : <Login />}
        </Route>

        <Route path="/register">
          {user ? <Redirect to="/play" /> : <Register />}
        </Route>
        {user ? (
          <>
            <Route path="/play" children={<Play />} />
            <Route path="series" children={<Series />} />
            <Route path="movies" children={<Movies />} />
            <Route path="watch" children={<Watch />} />
          </>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </Router>
  );
};

export default Routing;
