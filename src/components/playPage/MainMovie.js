import React from "react";
import apiData from "../../api/apiData";
import MoviesArr from "./MoviesArr";

const MainMovie = (props) => {
  const { requestOne, requestOne1, requestOne2, requestTwo, requestThree } =
    props.movies;
  console.log(requestOne.results);
  return (
    <>
      <div>this is the main div</div>
      <div>{requestOne.results[0].title}</div>

      <MoviesArr
        name={`Everybody's Talking About Them`}
        movies={requestOne.results}
      />
      {/* 
      <MoviesArr name={`Must-Watch Movies`} movies={requestOne.results} />
      <SeriesArr name={`Can't-Miss Series`} series={requestTwo.tv_shows} />
      <MoviesArr name={`Just Added`} movies={requestOne1.results} />
      <MoviesArr name={`Weird but Awesome`} movies={requestThree.results} />
      <MoviesArr name={`Box Office Hits`} movies={requestOne2.results} /> */}
    </>
  );
};

export default MainMovie;
