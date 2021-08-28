import React from "react";
import SeriesArr from "./SeriesArr";
import apiData from "../../api/apiData";
import { useState, useEffect } from "react";
const {
  ROOT_API_MOVIES,
  ROOT_API_MOVIES_POSTER,
  ROOT_API_TV_SHOWS,
  API_KEY,
  TESTING_TOKEN,
} = apiData();
const MoviesItem = (props) => {
  const { myId, data } = props;
  const [litBtn, setLitBtn] = useState("none");
  let myStyles = {
    background: "#634",
    display: litBtn,
  };
  const showBtn = () => {
    setLitBtn("block");
  };
  const hideBtn = () => {
    setLitBtn("none");
  };
  return (
    <>
      <div className="movie-item" onMouseMove={showBtn} onMouseOut={hideBtn}>
        <h2>key: {myId}</h2>
        <img
          src={ROOT_API_MOVIES_POSTER + data.poster_path}
          alt={data.title}
          style={{ width: 200 }}
        />
        <button
          className="watch-btn"
          onClick={() => console.log("watch", myId)}
          style={myStyles}
        >
          watch
        </button>
        <button
          className="save-btn"
          onClick={() => console.log("save", myId)}
          style={myStyles}
        >
          save
        </button>
      </div>
    </>
  );
};

export default MoviesItem;
