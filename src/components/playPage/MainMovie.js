import React from "react";
import apiData from "../../api/apiData";
import MoviesArr from "./MoviesArr";
import SeriesArr from "./SeriesArr";
const {
  ROOT_API_MOVIES,
  ROOT_API_MOVIES_POSTER,
  ROOT_API_TV_SHOWS,
  API_KEY,
  TESTING_TOKEN,
} = apiData();
const MainMovie = (props) => {
  const { requestOne, requestTwo, requestThree } = props.movies;
  console.log(requestOne.results);
  return (
    <>
      <div>this is the main div</div>
      <div>{requestOne.results[0].title}</div>
      <MoviesArr name={`Everybody's Talking About Them`} />
      <MoviesArr name={`Must-Watch Movies`} />
      <SeriesArr name={`Can't-Miss Series`} />
      <MoviesArr name={`Just Added`} />
      <MoviesArr name={`Box Office Hits`} />
      {/* <div className="movie-item">
        <h2>{moviesArr[0].title}</h2>
        <img src={ROOT_API_MOVIES_POSTER + moviesArr[0].poster_path} />
      </div> */}
    </>
  );
};

export default MainMovie;
