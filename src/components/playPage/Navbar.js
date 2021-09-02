import React, { useContext } from "react";
import apiData from "../../api/apiData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logout } from "./../../context/AuthActions";

const {
  ROOT_API_MOVIES,
  ROOT_API_MOVIES_POSTER,
  ROOT_API_TV_SHOWS,
  API_KEY,
  TESTING_TOKEN,
} = apiData();
const Navbar = (props) => {
  const { user, dispatch } = useContext(AuthContext);
  const [opacity, setOpacity] = useState("none");
  const { searchTrue, setInputSearch, setSearchTrue } = props;
  const myBackground = (color) => {
    if (color == "none") {
      setOpacity("hsla(40, 60%, 10%, .5) ");
    } else if (color == "color") {
      setOpacity("none");
    }
  };
  const inputStyle = {
    background: "#333",
  };
  const handleTrue = (e) => {
    console.log("handle true");
  };
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        zIndex: "55",
        height: "60px",
        background: opacity,
      }}
      onMouseOver={() => myBackground("none")}
      onMouseOut={() => myBackground("color")}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            /* position: "absolute", */
          }}
        >
          <div
            style={{
              marginRight: "16px",
            }}
          >
            <button className="nav-btn">
              <Link to="/play">MENU</Link>
            </button>
          </div>
          {!searchTrue ? (
            <div>
              <button className="nav-btn" onClick={handleTrue}>
                <Link to="/search">SEARCH</Link>
              </button>
            </div>
          ) : (
            <div>
              <input
                type="text"
                id="mySearch"
                name="mySearch"
                placeholder="What are you looking for?"
                onChange={(e) => setInputSearch(e.target.value)}
                style={inputStyle}
              />
            </div>
          )}
        </div>

        {!searchTrue ? (
          <div>
            <Link to="/play">
              <button className="nav-btn">HBO MAX</button>
            </Link>
          </div>
        ) : (
          ""
        )}
        <div>
          <button className="nav-btn" style={{ marginRight: "1rem" }}>
            {user.username}
          </button>
          <button onClick={() => dispatch(logout())} className="nav-btn">
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
