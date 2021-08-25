import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import apiData from "../api/apiData";
const { ROOT_API, TESTING_TOKEN } = apiData();
const header = {
  headers: {
    authorization: `Bearer ${TESTING_TOKEN}`,
  },
};
const Play = () => {
  let [display, setDisplay] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(`${ROOT_API}/posts`, header);
      const data = await res.data;
      setDisplay(data.data);
    };
    fetchApi();
  }, []);
  console.log(display);
  return (
    <>
      <div>my movies</div>
      <div className="movies-wrapper">
        {display ? <h2>{display[1].title}</h2> : "no movies available"}
      </div>
    </>
  );
};

export default Play;
