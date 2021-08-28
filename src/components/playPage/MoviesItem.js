import React from "react";
import SeriesArr from "./SeriesArr";
import apiData from "../../api/apiData";

const {
  ROOT_API_MOVIES,
  ROOT_API_MOVIES_POSTER,
  ROOT_API_TV_SHOWS,
  API_KEY,
  TESTING_TOKEN,
} = apiData();
const MoviesItem = (props) => {
  const { myId, data } = props;
  return (
    <>
      <div>
        <h2>key: {myId}</h2>
        <img
          src={ROOT_API_MOVIES_POSTER + data.poster_path}
          alt={data.title}
          style={{ width: 500 }}
        />
        <button onClick={() => console.log("watch", myId)}>watch</button>
        <button onClick={() => console.log("save", myId)}>save</button>
      </div>
    </>
  );
};

export default MoviesItem;
