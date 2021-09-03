import React from "react";
import MoviesItem from "./MoviesItem";
import { useState, useEffect, useRef, useContext } from "react";
import { getMyList } from "../../context/ApiAuthCalls";
import apiData from "./../../api/apiData";
import axios from "axios";
const {
  ROOT_API_MOVIES,
  ROOT_API_MOVIES_POSTER,
  ROOT_API_TV_SHOWS,
  API_KEY,
  TESTING_TOKEN,
} = apiData();
const MoviesArr = (props) => {
  const [slidesCount, setSlidesCount] = useState(0);

  let myListStyles = {
    /* position: "absolute", */
    width: "100%",
    /* top: "100px", */
  };
  let myWrapperStyles = {
    display: "flex",
    position: "relative",
    width: "max-content",
    transform: "translateX(0px)",
    transition: "all 1s ease",
  };
  let myBtnStyles = {
    position: "absolute",
    width: "50px",
    top: "0",
    bottom: "0",
    left: "-50px",
    zIndex: "50",
    opacity: ".4",
  };

  const { name, movies, info, superInfoArr } = props;
  const [infoS, setInfoS] = useState([]);
  const wrapperRef = useRef();
  const listRef = useRef();

  const handleBtn = (direction) => {
    let distance = wrapperRef.current.getBoundingClientRect().x - 50;
    console.log(listRef.current.getBoundingClientRect());
    console.log(distance);
    if (direction == "left" && slidesCount > 0 && distance % 2 == 0) {
      setSlidesCount((current) => current - 1);
      wrapperRef.current.style.transform = `translateX(${distance + 210}px)`;
    } else if (
      direction == "right" &&
      slidesCount < 14 &&
      (distance + 210) % 2 == 0
    ) {
      setSlidesCount((current) => current + 1);
      wrapperRef.current.style.transform = `translateX(${distance - 210}px)`;
      console.log("right");
    }
  };

  const headers = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
    },
  };
  useEffect(() => {
    if (!superInfoArr) {
      console.log("hello world from Main");
    } else {
      const getMyList = async (arrList) => {
        try {
          let promises = [];
          for (let i = 0; i < arrList.length; i++) {
            promises.push(
              await axios.get(
                `${ROOT_API_MOVIES}/movie/${arrList[i]}?api_key=${API_KEY}`,
                headers
              )
            );
          }
          const AllPromise = await Promise.all(promises);
          setInfoS(AllPromise);
        } catch (error) {
          console.log(error);
        }
      };
      getMyList(superInfoArr);
    }
  }, [superInfoArr]);
  return (
    <div style={{ marginBottom: "50px", position: "relative" }}>
      <h2>{name}</h2>
      {/*  {console.log(data)} */}
      {!movies.length === 0 ? (
        <h2>loading..</h2>
      ) : (
        <div style={{ position: "relative" }}>
          <div className="movie-item__list" style={myListStyles} ref={listRef}>
            <button style={myBtnStyles} onClick={() => handleBtn("left")}>
              left
            </button>
            <button
              style={{ ...myBtnStyles, left: "", right: "0px" }}
              onClick={() => handleBtn("right")}
            >
              right
            </button>
            <div
              className="movie-item__wrapper"
              style={myWrapperStyles}
              ref={wrapperRef}
            >
              {infoS
                ? infoS.map((el) => (
                    <MoviesItem
                      key={el.data.id}
                      myId={el.data.id}
                      data={el.data}
                      info={info}
                    />
                  ))
                : ""}
              {movies.map((el) => (
                <MoviesItem key={el.id} myId={el.id} data={el} info={info} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesArr;

/*   const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]; */
/* 
infoS.map((el) => (
                    <MoviesItem
                      key={el.id}
                      myId={el.id}
                      data={el.data}
                      info={info}
                    />
                  )) */
