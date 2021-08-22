import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Play = () => {
  const ROOT_API = process.env.REACT_APP_ROOT_API;
  const TESTING_TOKEN = process.env.REACT_APP_TESTING_TOKEN;

  //  let [display, setDisplay] = useState([]);
  useEffect(() => {
    console.log(ROOT_API);
    const fetchApi = async () => {
      try {
        const rawData = await axios.get(`${ROOT_API}/posts`, {
          headers: { authorization: `Bearer ${TESTING_TOKEN}` },
        });
        const data = await rawData.data;
        const dataArr = await data.data;
        console.log(dataArr);
      } catch (error) {}
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
