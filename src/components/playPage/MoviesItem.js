import React from "react";
import SeriesArr from "./SeriesArr";
import apiData from "../../api/apiData";
import { useState, useEffect, useRef } from "react";
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
  const divRef = useRef();
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
    zIndex: "67",
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
        onClick={() => console.log(divRef)}
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
            <button
              className="save-btn"
              onClick={(e) => {
                console.log("save", myId);
                e.stopPropagation();
              }}
              style={myBtn}
            >
              WATCH
            </button>
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
            onClick={(e) => {
              console.log("save", myId);
              e.stopPropagation();
            }}
            style={myBtn}
          >
            SAVE
          </button>
        </div>
      </div>
    </>
  );
};

export default MoviesItem;
