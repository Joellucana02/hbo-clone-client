import React from "react";
import apiData from "../../api/apiData";
const {
  ROOT_API_MOVIES,
  ROOT_API_MOVIES_POSTER,
  ROOT_API_TV_SHOWS,
  API_KEY,
  TESTING_TOKEN,
} = apiData();
const navbar = (props) => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        zIndex: "55",
      }}
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
        <div>HBO MAX</div>
        <div>
          <button>ACCOUNT</button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
