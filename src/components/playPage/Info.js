import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiData from "../../api/apiData";

const {
  ROOT_API_MOVIES,
  ROOT_API_MOVIES_POSTER,
  ROOT_API_TV_SHOWS,
  API_KEY,
  TESTING_TOKEN,
} = apiData();
const Info = (props) => {
  const { featured } = props;
  const fMovie = featured.results[6];
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
            <p style={{ wordSpacing: " 10px", marginBottom: "15px" }}>
              1HR 58MIN 13+ 2013 HD 6.3
            </p>
          </div>
          <div className="btn-box">
            <Link to="/watch" style={linkStyles}>
              Watch
            </Link>
            <Link to="/watch" style={linkStyles}>
              MORE INFO
            </Link>
          </div>
        </div>
      </div>
      <h2>{`Cast & Crew`}</h2>
      <p>Ray Ferrier Tom Cruise</p>
      <p>Rachel Ferrier Dakota Fanning</p>
      <p>Mary Ann Miranda Otto</p>
      <p>Ogilvy Tim Robbins</p>
      <h2>{`Producers`}</h2>
      <p>Producer Kathleen Kennedy</p>
      <p>Producer Colin Wilson</p>
      <p>Executive Producer Paula Wagner</p>
      <h2>{`Directors`}</h2>
      <p>Directed By Steven Spielberg</p>
      <h2>{`Writters`}</h2>
      <p>Screenplay By David Koepp</p>
      <p>Based On The Novel ByH.G. Wells</p>
      <h2>{`Rating Information`}</h2>

      <p>13+</p>
    </div>
  );
};

export default Info;
