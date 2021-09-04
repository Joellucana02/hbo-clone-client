import React from "react";
import { Link } from "react-router-dom";
const home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "200px",
        }}
      >
        <Link to="/login">LOGIN</Link>

        <Link to="/signup">SIGNUP</Link>
      </div>
    </div>
  );
};

export default home;
