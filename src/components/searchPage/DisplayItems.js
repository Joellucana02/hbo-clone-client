import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apiData from "./../../api/apiData";
const {
  ROOT_API_MOVIES,
  ROOT_API_MOVIES_POSTER,
  ROOT_API_TV_SHOWS,
  API_KEY,
  TESTING_TOKEN,
} = apiData();
const DisplayItems = (props) => {
  const { myId, data, infoM } = props;

  const [litBtn, setLitBtn] = useState("none");
  const [opaImg, setOpaImg] = useState("1");
  const divRef = useRef();

  let myCardStyles = {
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
      <div style={{ display: "flex" }}>
        <div className="movie-item" style={myCardStyles}>
          <img
            src={ROOT_API_MOVIES_POSTER + data.poster_path}
            alt={data.title}
            style={imgStyles}
            onMouseOver={showBtn}
            onMouseOut={hideBtn}
            onClick={() => {
              infoM({ status: true, data: data });
              window.scrollTo({
                top: 0,
                /* behavior: "smooth", */
              });
            }}
          />
          <div className="btn-container" style={btnContainer}>
            <Link to="/watch" style={{ marginRight: "10px" }}>
              <button
                className="nav-btn"
                onClick={(e) => {
                  console.log("save", myId);
                  e.stopPropagation();
                }}
                style={myBtn}
              >
                WATCH
              </button>
            </Link>
            <button
              className="nav-btn"
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
      </div>
    </>
  );
};

export default DisplayItems;
