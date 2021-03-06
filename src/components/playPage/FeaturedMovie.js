import React from "react";
import apiData from "../../api/apiData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const {
  ROOT_API_MOVIES,
  ROOT_API_MOVIES_POSTER,
  ROOT_API_TV_SHOWS,
  API_KEY,
  TESTING_TOKEN,
} = apiData();
const FeaturedMovie = (props) => {
  const { featured, info } = props;
  const fMovie = featured.results[9];
  console.log(fMovie);
  const imgMovieStyles = {
    width: "100%",
    height: "100%",
    opacity: ".7",
  };
  const linkStyles = {
    fontSize: "1.2rem",
    marginRight: "30px",
  };
  return (
    <div>
      <div className="f-movie-wrapper" style={{ position: "relative" }}>
        <img
          src={ROOT_API_MOVIES_POSTER + fMovie.backdrop_path}
          alt={fMovie.title}
          style={imgMovieStyles}
        />
        <div
          className="info-and-btn"
          style={{ position: "absolute", bottom: "30%", left: "50px" }}
        >
          <div className="info">
            <h2 style={{ fontSize: "2rem" }}>{fMovie.original_title}</h2>
            <p style={{ width: "450px", marginBottom: "15px" }}>
              {fMovie.overview}
            </p>
          </div>
          <div className="btn-box">
            <Link to="/watch" style={linkStyles}>
              Watch
            </Link>

            <button
              onClick={() => info({ status: true, data: fMovie })}
              className="nav-btn"
            >
              MORE INFO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
