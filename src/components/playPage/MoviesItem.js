import React from "react";
import SeriesArr from "./SeriesArr";
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
const MoviesItem = (props) => {
  const [litBtn, setLitBtn] = useState("none");
  const [opaImg, setOpaImg] = useState("1");
  let myCardStyles = {
    //background: "#952",
    position: "relative",
    marginLeft: "10px",
  };
  let myBtn = {
    fontSize: "20px",
    background: "none",
    border: "none",
  };
  let imgStyles = {
    width: "200px",
    height: "300px",
    opacity: opaImg,
  };
  let btnContainer = {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    display: "flex",
    display: litBtn,
  };
  const { myId, data } = props;

  const showBtn = () => {
    setLitBtn("block");
    setOpaImg(".6");
  };
  const hideBtn = () => {
    setLitBtn("none");
    setOpaImg("1");
  };
  return (
    <>
      <div
        className="movie-item"
        onMouseMove={null}
        onMouseOut={null}
        style={myCardStyles}
        onMouseOver={showBtn}
        onMouseOut={hideBtn}
      >
        <img
          src={ROOT_API_MOVIES_POSTER + data.poster_path}
          alt={data.title}
          style={imgStyles}
          onMouseOver={showBtn}
          onMouseOut={hideBtn}
        />
        <div className="btn-container" style={btnContainer}>
          <Link to="/watch" style={{ marginRight: "10px" }}>
            Watch
          </Link>
          {/* <button
            className="watch-btn"
            onClick={() => console.log("watch", myId)}
            style={myBtn}
          >
            watch
          </button> */}
          <button
            className="save-btn"
            onClick={() => console.log("save", myId)}
            style={myBtn}
          >
            save
          </button>
        </div>
      </div>
    </>
  );
};

export default MoviesItem;
