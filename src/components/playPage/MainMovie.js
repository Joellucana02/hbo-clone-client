import React from "react";
import apiData from "../../api/apiData";
import MoviesArr from "./MoviesArr";

const MainMovie = (props) => {
  const { requestOne, requestOne1, requestOne2, requestTwo, requestThree } =
    props.movies;
  console.log(requestOne.results);

  return (
    <div
      style={{
        background: "linear-gradient(to top left, #55096D, #05091F) ",
        width: "100vw",
        height: "100%",
        position: "relative",
      }}
    >
      <div>this is the main div</div>
      <div>{requestOne.results[0].title}</div>

      <MoviesArr
        name={`Everybody's Talking About Them`}
        movies={requestOne.results}
      />

      <MoviesArr name={`Must-Watch Movies`} movies={requestOne.results} />

      <MoviesArr name={`Just Added`} movies={requestOne1.results} />

      <MoviesArr name={`Weird but Awesome`} movies={requestThree.results} />

      <MoviesArr name={`Box Office Hits`} movies={requestOne2.results} />
    </div>
  );
};

export default MainMovie;

{
  /* <SeriesArr name={`Can't-Miss Series`} series={requestTwo.tv_shows} /> */
}
