import axios from "axios";
import { useContext } from "react";

import { loginSuccess, loginError, loginAction } from "./AuthActions";

export const Authlogin = async (user, dispatch) => {
  dispatch(loginAction());
  try {
    const myUser = await axios.post("http://localhost:3009/api/v1/login", user);
    console.log("api auth call");
    dispatch(loginSuccess(myUser.data.data));
    sessionStorage.setItem("jwt", myUser.data.jwt);
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
      `http://localhost:3009/api/v1/users/${user._id}`,
      { comments: addToList },
      headers
    );
    console.log("success!!!");
  } catch (error) {
    console.log(error);
  }
};
