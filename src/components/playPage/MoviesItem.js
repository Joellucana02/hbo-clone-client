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
  const [litBtn, setLitBtn] = useState("none");
  let myCardStyles = {
    //background: "#952",
    marginLeft: "10px",
  };
  let myBtn = {
    background: "#634",
    display: litBtn,
  };
  let imgStyles = {
    width: "200px",
    height: "300px",
  };

  const { myId, data } = props;

  const showBtn = () => {
    setLitBtn("block");
  };
  const hideBtn = () => {
    setLitBtn("none");
  };
  return (
    <>
      <div
        className="movie-item"
        onMouseMove={null}
        onMouseOut={null}
        style={myCardStyles}
      >
        <h2>key: {myId}</h2>
        <img
          src={ROOT_API_MOVIES_POSTER + data.poster_path}
          alt={data.title}
          style={imgStyles}
        />
        <button
          className="watch-btn"
          onClick={() => console.log("watch", myId)}
          style={myBtn}
        >
          watch
        </button>
        <button
          className="save-btn"
          onClick={() => console.log("save", myId)}
          style={myBtn}
        >
          save
        </button>
      </div>
    </>
  );
};

export default MoviesItem;
