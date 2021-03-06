import React from "react";
import NavBar from "../components/playPage/Navbar";
import MainMovie from "../components/playPage/MainMovie";
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

const header = {
  headers: {
    authorization: `Bearer ${TESTING_TOKEN}`,
  },
};
const Play = () => {
  let [display, setDisplay] = useState(null);

  let mainStyles = {
    width: "100vw",
  };
  let pageNumS = 1;
  let pageNumSearch = 1;
  let queryMovie = "kong";

  let arrByPopularityM = (num) => {
    return `${ROOT_API_MOVIES}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${num}`;
  };
  let arrByPopularityKids = (num) => {
    return `${ROOT_API_MOVIES}/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=${num}`;
  };
  let arrByPopularityS = `${ROOT_API_TV_SHOWS}/most-popular?page=${pageNumS}`;

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const requestOne = await axios.get(arrByPopularityM(1));
        const requestTwo = await axios.get(arrByPopularityS);
        const requestThree = await axios.get(arrByPopularityKids(3));
        const requestOne1 = await axios.get(arrByPopularityM(2));
        const requestOne2 = await axios.get(arrByPopularityM(3));
        const requestOne3 = await axios.get(arrByPopularityM(4));
        const responses = await {
          requestOne: requestOne.data,
          requestTwo: requestTwo.data,
          requestThree: requestThree.data,
          requestOne1: requestOne1.data,
          requestOne2: requestOne2.data,
          requestOne3: requestOne3.data,
        };
        setDisplay(responses);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);
  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        paddingBottom: "100px",
        position: "relative",
        background: "linear-gradient(to top left, #55096d, #05091f)",
      }}
    >
      <NavBar />
      {!display ? <h2>Loading...</h2> : <MainMovie movies={display} />}
    </div>
  );
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
