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
import Search from "./Search";

const Routing = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to={`/play/${user._id}`} /> : <Home />}
        </Route>

        <Route path="/login">
          {user ? <Redirect to={`/play/${user._id}`} /> : <Login />}
        </Route>

        <Route path="/register">
          {user ? <Redirect to={`/play/${user._id}`} /> : <Register />}
        </Route>
        {user ? (
          <>
            <Route path={`/play/${user._id}`} children={<Play />} />
            <Route path="/series" children={<Series />} />
            <Route path="/movies" children={<Movies />} />
            <Route path="/watch" children={<Watch />} />
            <Route path="/search" children={<Search />} />
          </>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </Router>
  );
};

export default Routing;
