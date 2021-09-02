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
  const { dataM, info } = props;
  /* const fMovie = dataM.results[6]; */

  console.log(dataM);
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
        <button
          style={{
            position: "absolute",
            zIndex: "70",
            top: "10%",
            left: "50px",
          }}
          onClick={() => info({ status: false })}
        >
          BACK
        </button>
        <img
          src={ROOT_API_MOVIES_POSTER + dataM.backdrop_path}
          alt={dataM.title}
          style={imgMovieStyles}
        />
        <div
          className="info-and-btn"
          style={{ position: "absolute", bottom: "30%", left: "50px" }}
        >
          <div className="info">
            <h2 style={{ fontSize: "2rem" }}>{dataM.original_title}</h2>
            <p style={{ width: "450px", marginBottom: "15px" }}>
              {dataM.overview}
            </p>
            <p style={{ wordSpacing: " 10px", marginBottom: "15px" }}>
              1HR 58MIN 13+ 2021 HD 6.3
            </p>
          </div>
          <div className="btn-box">
            <Link to="/watch" style={linkStyles}>
              Watch
            </Link>
            <button>SAVE</button>
          </div>
        </div>
      </div>
      <h2>{`Cast & Crew`}</h2>
      <br />
      <br />
      <p>Ray Ferrier: Tom Cruise</p>
      <br />

      <p>Rachel Ferrier: Dakota Fanning</p>
      <br />

      <p>Mary Ann: Miranda Otto</p>
      <br />

      <p>Ogilvy: Tim Robbins</p>
      <br />

      <h2>{`Producers`}</h2>
      <br />
      <br />
      <p>Producer: Kathleen Kennedy</p>
      <br />

      <p>Producer: Colin Wilson</p>
      <br />

      <p>Executive: Producer Paula Wagner</p>
      <br />

      <h2>{`Directors`}</h2>
      <br />
      <br />
      <p>Directed By: Steven Spielberg</p>
      <br />

      <h2>{`Writters`}</h2>
      <br />
      <br />
      <p>Screenplay By: David Koepp</p>
      <br />

      <p>Based On The Novel By: H.G. Wells</p>
      <br />

      <h2>{`Rating Information`}</h2>
      <br />
      <br />
      <p>13+</p>
      <br />
    </div>
  );
};

export default Info;
