import React from "react";
import { useState, useEffect, useRef } from "react";
import SeriesItem from "./SeriesItem";
const SeriesArr = (props) => {
  const [slidesCount, setSlidesCount] = useState(0);
  let myListStyles = {
    /* position: "absolute", */
    width: "100%",
    /* top: "100px", */
  };
  let myWrapperStyles = {
    display: "flex",
    position: "relative",
    width: "max-content",
    transform: "translateX(0px)",
    transition: "all 1s ease",
  };
  let myBtnStyles = {
    position: "absolute",
    width: "50px",
    top: "0",
    bottom: "0",
    left: "-50px",
    zIndex: "50",
    opacity: ".4",
  };

  const { name, series } = props;
  console.log(series);

  const wrapperRef = useRef();
  const listRef = useRef();

  const handleBtn = (direction) => {
    let distance = wrapperRef.current.getBoundingClientRect().x - 50;
    console.log(listRef.current.getBoundingClientRect());
    console.log(distance);
    if (direction == "left" && slidesCount > 0 && distance % 2 == 0) {
      setSlidesCount((current) => current - 1);
      wrapperRef.current.style.transform = `translateX(${distance + 210}px)`;
    } else if (
      direction == "right" &&
      slidesCount < 14 &&
      (distance + 210) % 2 == 0
    ) {
      setSlidesCount((current) => current + 1);
      wrapperRef.current.style.transform = `translateX(${distance - 210}px)`;
      console.log("right");
    }
  };
  return (
    <div style={{ marginBottom: "50px", position: "relative" }}>
      <h2>{name}</h2>
      {/*  {console.log(data)} */}
      {!series.length === 0 ? (
        <h2>loading..</h2>
      ) : (
        <div style={{ position: "relative" }}>
          <div className="movie-item__list" style={myListStyles} ref={listRef}>
            <button style={myBtnStyles} onClick={() => handleBtn("left")}>
              left
            </button>
            <button
              style={{ ...myBtnStyles, left: "", right: "0px" }}
              onClick={() => handleBtn("right")}
            >
              right
            </button>
            <div
              className="movie-item__wrapper"
              style={myWrapperStyles}
              ref={wrapperRef}
            >
              {series.map((el) => (
                <SeriesItem key={el.id} myId={el.id} data={el} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeriesArr;
