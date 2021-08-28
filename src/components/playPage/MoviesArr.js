import React from "react";
import MoviesItem from "./MoviesItem";

const MoviesArr = (props) => {
  const { name, movies } = props;
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
