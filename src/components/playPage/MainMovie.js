import React from "react";
import apiData from "../../api/apiData";
import FeaturedMovie from "./FeaturedMovie";
import Info from "./Info";
import MoviesArr from "./MoviesArr";
import SeriesArr from "./SeriesArr";
import { useState, useEffect } from "react";
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
  const [moreInfo, setMoreInfo] = useState({
    status: false,
    data: null,
  });
  return (
    <>
      {!moreInfo.status ? (
        <div>
          <FeaturedMovie featured={requestOne} info={setMoreInfo} />
          <div
            style={{
              position: "relative",
              marginLeft: "50px",
            }}
          >
            <MoviesArr
              name={`Everybody's Talking About Them`}
              movies={requestOne.results}
              info={setMoreInfo}
            />

            <MoviesArr
              name={`Must-Watch Movies`}
              movies={requestOne3.results}
              info={setMoreInfo}
            />

            <MoviesArr
              name={`Just Added`}
              movies={requestOne1.results}
              info={setMoreInfo}
            />

            <SeriesArr
              name={`Can't-Miss Series`}
              series={requestTwo.tv_shows}
              info={setMoreInfo}
            />

            <MoviesArr
              name={`Weird but Awesome`}
              movies={requestThree.results}
              info={setMoreInfo}
            />

            <MoviesArr
              name={`Box Office Hits`}
              movies={requestOne2.results}
              info={setMoreInfo}
            />
          </div>
        </div>
      ) : (
        <Info dataM={moreInfo.data} info={setMoreInfo} />
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
