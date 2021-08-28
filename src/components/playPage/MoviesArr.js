import React from "react";
import MoviesItem from "./MoviesItem";
import { useState, useEffect } from "react";
const MoviesArr = (props) => {
  const { name, movies } = props;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <h2>{name}</h2>
      {/*  {console.log(data)} */}
      {!movies.length === 0 ? (
        <h2>loading..</h2>
      ) : (
        <div className="movie-item__wrapper">
          {movies.map((el) => (
            <MoviesItem key={el.id} myId={el.id} data={el} />
          ))}
        </div>
      )}
    </>
  );
};

export default MoviesArr;
