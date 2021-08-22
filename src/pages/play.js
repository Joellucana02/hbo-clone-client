import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Play = () => {
  //  let [display, setDisplay] = useState([]);
  useEffect(() => {
    console.log(ROOT_API);
    const fetchApi = async () => {};
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
