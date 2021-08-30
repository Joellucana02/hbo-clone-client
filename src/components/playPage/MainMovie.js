import React from "react";
import apiData from "../../api/apiData";
import FeaturedMovie from "./FeaturedMovie";
import Info from "./Info";
import MoviesArr from "./MoviesArr";
import SeriesArr from "./SeriesArr";

const MainMovie = (props) => {
  const {
    requestOne,
    requestOne1,
    requestOne2,
    requestOne3,
    requestTwo,
    requestThree,
  } = props.movies;
  console.log(requestOne.results);
  const moreInfo = true;
  return (
    <>
      {!moreInfo ? (
        <div>
          <FeaturedMovie featured={requestOne} />
          <div
            style={{
              position: "relative",
              marginLeft: "50px",
            }}
          >
            <MoviesArr
              name={`Everybody's Talking About Them`}
              movies={requestOne.results}
            />

            <MoviesArr
              name={`Must-Watch Movies`}
              movies={requestOne3.results}
            />

            <MoviesArr name={`Just Added`} movies={requestOne1.results} />

            <SeriesArr
              name={`Can't-Miss Series`}
              series={requestTwo.tv_shows}
            />

            <MoviesArr
              name={`Weird but Awesome`}
              movies={requestThree.results}
            />

            <MoviesArr name={`Box Office Hits`} movies={requestOne2.results} />
          </div>
        </div>
      ) : (
        <Info featured={requestOne} />
      )}
    </>
  );
};

export default MainMovie;

/* 
        <h2
          style={{
            background: "none",
            paddingBottom: "800px",
            marginBottom: "843px",
          }}
        >
          Hello world
        </h2> */
