import React, { useContext } from "react";
import apiData from "../../api/apiData";
import FeaturedMovie from "./FeaturedMovie";
import Info from "./Info";
import MoviesArr from "./MoviesArr";
import SeriesArr from "./SeriesArr";
import { useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { getMyList } from "../../context/ApiAuthCalls";
const MainMovie = (props) => {
  const {
    requestOne,
    requestOne1,
    requestOne2,
    requestOne3,
    requestTwo,
    requestThree,
  } = props.movies;
  console.log(requestOne.results);
  const [moreInfo, setMoreInfo] = useState({
    status: false,
    data: null,
  });
  const [infoArr, setInfoArr] = useState([]);
  const { user, dispatch } = useContext(AuthContext);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const raw = await axios.get(
          `http://localhost:3009/api/v1/users/${user._id}`
        );
        const data = await raw.data;
        console.log(data);
        setInfoArr(data.data.comments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      {!moreInfo.status ? (
        <div>
          <FeaturedMovie featured={requestOne} info={setMoreInfo} />
          <div
            style={{
              position: "relative",
              marginLeft: "50px",
            }}
          >
            {infoArr.length > 0 ? (
              <MoviesArr
                name={`My List`}
                superInfoArr={infoArr}
                movies={infoArr}
                info={setMoreInfo}
              />
            ) : (
              <h2></h2>
            )}
            <>
              <MoviesArr
                name={`Everybody's Talking About Them`}
                movies={requestOne.results}
                info={setMoreInfo}
              />

              <MoviesArr
                name={`Must-Watch Movies`}
                movies={requestOne3.results}
                info={setMoreInfo}
              />

              <MoviesArr
                name={`Just Added`}
                movies={requestOne1.results}
                info={setMoreInfo}
              />

              <SeriesArr
                name={`Can't-Miss Series`}
                series={requestTwo.tv_shows}
                info={setMoreInfo}
              />

              <MoviesArr
                name={`Weird but Awesome`}
                movies={requestThree.results}
                info={setMoreInfo}
              />

              <MoviesArr
                name={`Box Office Hits`}
                movies={requestOne2.results}
                info={setMoreInfo}
              />
            </>
          </div>
        </div>
      ) : (
        <Info dataM={moreInfo.data} info={setMoreInfo} />
      )}
    </>
  );
};

export default MainMovie;

/* 
<h2
style={{
  background: "none",
  paddingBottom: "800px",
  marginBottom: "843px",
}}
>
Hello world
</h2> */

{
  /* <MoviesArr
  name={`My List`}
  superInfoArr={infoArr}
  info={setMoreInfo}
/> */
}
