import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import apiData from "../api/apiData";
const { ROOT_API, TESTING_TOKEN } = apiData;
const header = {
  headers: {
    authorization: `Bearer ${TESTING_TOKEN}`,
  },
};
console.log(apiData);
const Play = () => {
  let [display, setDisplay] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(`${ROOT_API}/posts`, header);
      console.log(res);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div>my movies</div>
      <div className="movies-wrapper"></div>
    </>
  );
};

export default Play;
