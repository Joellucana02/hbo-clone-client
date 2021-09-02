import axios from "axios";
import { useContext } from "react";

import { loginSuccess, loginError, loginAction } from "./AuthActions";

export const Authlogin = async (user, dispatch) => {
  dispatch(loginAction());
  try {
    const myUser = await axios.post("http://localhost:3009/api/v1/login", user);
    console.log("api auth call");
    dispatch(loginSuccess(myUser.data.data));
  } catch (error) {
    dispatch(loginError);
  }
};
