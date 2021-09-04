import axios from "axios";
import { useState, useEffect, useRef, useContext } from "react";
import { loginSuccess, loginError, loginAction, userList } from "./AuthActions";

export const Authlogin = async (user, dispatch) => {
  dispatch(loginAction());
  try {
    const myUser = await axios.post(
      "https://whomovies.herokuapp.com/api/v1/login",
      user
    );
    dispatch(loginSuccess(myUser.data.data));
    sessionStorage.setItem("jwt", myUser.data.jwt);
  } catch (error) {
    dispatch(loginError);
  }
};
export const AuthRegister = async (user, dispatch) => {
  dispatch(loginAction());
  try {
    const newUser = await axios.post(
      "https://whomovies.herokuapp.com/api/v1/signup",
      user
    );
    dispatch(loginSuccess(newUser.data.data));
    sessionStorage.setItem("jwt", newUser.data.jwt);
  } catch (error) {
    dispatch(loginError);
  }
};
const headers = {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
  },
};
export const MyList = async (user, addToList) => {
  try {
    const updateList = await axios.post(
      `https://whomovies.herokuapp.com/api/v1/users/${user._id}`,
      { comments: addToList },
      headers
    );
    console.log("success!!!");
  } catch (error) {
    console.log(error);
  }
};
/* export const getMyList = async (arrList) => {
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
    console.log(AllPromise);
  } catch (error) {
    console.log(error);
  }
}; */
/* .then(function handleData(data) {
  return fetch("example.api") // should be returned 1 time
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    });
}) */
