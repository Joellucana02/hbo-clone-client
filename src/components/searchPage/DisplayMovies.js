import React from "react";
import DisplayItems from "./DisplayItems";
const DisplayMovies = (props) => {
  const { search, info } = props;
  const results = search.results;
  console.log(results);
  return (
    <>
      <div style={{ paddingTop: "10%" }}>
        <h2 style={{ marginBottom: "1rem" }}>HBO Max Recommends</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {results.map((el) => (
            <DisplayItems key={el.id} data={el} myId={el.id} infoM={info} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayMovies;
