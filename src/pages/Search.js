import React from "react";
import Navbar from "../components/playPage/Navbar";
import DisplayMovies from "../components/searchPage/DisplayMovies";
import { useState, useEffect } from "react";
import apiData from "../api/apiData";
import axios from "axios";
const {
  ROOT_API_MOVIES,
  ROOT_API_MOVIES_POSTER,
  ROOT_API_TV_SHOWS,
  API_KEY,
  TESTING_TOKEN,
} = apiData();
const Search = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [searchTrue, setSearchTrue] = useState(true);
  const [searchNum, setSearchNum] = useState(1);
  const [searchResult, setSearchResult] = useState(null);
  const [moreInfo, setMoreInfo] = useState({
    status: false,
    data: null,
  });
  let searchMovie = `${ROOT_API_MOVIES}/search/movie?api_key=${API_KEY}&query=${
    inputSearch || "god"
  }&page=${searchNum}`;
  let one = (num) => {
    return `${ROOT_API_MOVIES}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${num}`;
  };

  useEffect(() => {
    const searchCall = async () => {
      const rawData = await axios.get(searchMovie);
      const data = rawData.data;
      console.log(data);
      setSearchResult(data);
    };
    searchCall();
  }, [inputSearch]);
  useEffect(() => {
    const searchCall = async () => {
      const rawData = await axios.get(one(5));
      const data = rawData.data;
      console.log(data);
      setSearchResult(data);
    };
    searchCall();
  }, []);
  return (
    <>
      <div
        style={{ background: "linear-gradient(to top left, #55096d, #05091f)" }}
      >
        <Navbar
          setSearchTrue={setSearchTrue}
          setInputSearch={setInputSearch}
          searchTrue={searchTrue}
        />
        {!searchResult ? (
          <h2>LOADING...</h2>
        ) : (
          <DisplayMovies search={searchResult} info={setMoreInfo} />
        )}
      </div>
    </>
  );
};

export default Search;

{
  /*  */
}
