import React from "react";
import MoviesItem from "./MoviesItem";
import { useState, useEffect, useRef } from "react";
const MoviesArr = (props) => {
  const [slidesCount, setSlidesCount] = useState(0);
  let myListStyles = {
    position: "absolute",
    width: "100%",
  };
  let myWrapperStyles = {
    background: "#822",
    display: "flex",
    width: "max-content",
    transform: "translateX(0px)",
    transition: "all 1s ease",
  };
  let myBtnStyles = {
    position: "absolute",
    width: "50px",
    top: "0",
    bottom: "0",
    zIndex: "50",
    opacity: ".4",
  };

  const { name, movies } = props;

  const wrapperRef = useRef();
  const listRef = useRef();

  const handleBtn = (direction) => {
    let distance = wrapperRef.current.getBoundingClientRect().x;
    console.log(listRef.current.getBoundingClientRect());
    console.log(distance);
    if (direction == "left" && slidesCount > 0 && distance % 210 == 0) {
      setSlidesCount((current) => current - 1);
      wrapperRef.current.style.transform = `translateX(${distance + 210}px)`;
    } else if (
      direction == "right" &&
      slidesCount < 14 &&
      (distance + 210) % 210 == 0
    ) {
      setSlidesCount((current) => current + 1);
      wrapperRef.current.style.transform = `translateX(${distance - 210}px)`;
      console.log("right");
    }
  };
  return (
    <>
      <h2>{name}</h2>
      {/*  {console.log(data)} */}
      {!movies.length === 0 ? (
        <h2>loading..</h2>
      ) : (
        <div className="movie-item__list" style={myListStyles} ref={listRef}>
          <button style={myBtnStyles} onClick={() => handleBtn("left")}>
            left
          </button>
          <button
            style={{ ...myBtnStyles, right: "0" }}
            onClick={() => handleBtn("right")}
          >
            right
          </button>
          <div
            className="movie-item__wrapper"
            style={myWrapperStyles}
            ref={wrapperRef}
          >
            {movies.map((el) => (
              <MoviesItem key={el.id} myId={el.id} data={el} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesArr;

/*   const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]; */
