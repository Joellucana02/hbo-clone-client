import React from "react";
import apiData from "../../api/apiData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const {
  ROOT_API_MOVIES,
  ROOT_API_MOVIES_POSTER,
  ROOT_API_TV_SHOWS,
  API_KEY,
  TESTING_TOKEN,
} = apiData();
const Navbar = (props) => {
  const [opacity, setOpacity] = useState("none");
  const myBackground = (color) => {
    if (color == "none") {
      setOpacity("hsla(40, 60%, 10%, .5) ");
    } else if (color == "color") {
      setOpacity("none");
    }
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
            <button>MENU</button>
          </div>

          <div>SEARCH</div>
        </div>

        <div>
          <Link to="/play">HBO MAX</Link>
        </div>
        <div>
          <button>ACCOUNT</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
