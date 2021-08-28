import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import apiData from "../api/apiData";
const {
  ROOT_API_MOVIES,
  ROOT_API_MOVIES_POSTER,
  ROOT_API_TV_SHOWS,
  API_KEY,
  TESTING_TOKEN,
} = apiData();

const pageNum = 1;
const pageNumS = 1;
const pageNumSearch = 1;
const queryMovie = "kong";

const arrByPopularityM = `${ROOT_API_MOVIES}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page${pageNum}`;
const arrByPopularityKids = `${ROOT_API_MOVIES}/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc&page${pageNum}`;
const searchMovie = `${ROOT_API_MOVIES}/search/movie?api_key=${API_KEY}&query=${queryMovie}&page=${pageNumSearch}`;
const arrByPopularityS = `${ROOT_API_TV_SHOWS}/most-popular?page=${pageNumS}`;
const header = {
  headers: {
    authorization: `Bearer ${TESTING_TOKEN}`,
  },
};
const Play = () => {
  let [display, setDisplay] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(arrByPopularityS);
      const data = await res.data;
      setDisplay(data);
    };
    fetchApi();
  }, []);
  console.log(display);
  return <></>;
};

export default Play;

{
  /* <div className="movies-wrapper">
  {!display ? (
    "loading..."
  ) : (
    <>
      <div className="movie-item">
        <h2>{display[0].title}</h2>
        <img src={ROOT_API_MOVIES_POSTER + display[0].poster_path} />
      </div>
    </>
  )}
</div> */
}
