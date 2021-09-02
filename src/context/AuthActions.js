import React, { useState, useEffect } from "react";

export const loginAction = () => {
  return {
    type: "LOGIN_START",
  };
};

export const loginSuccess = (user) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: user,
  };
};

export const loginError = () => {
  return {
    type: "LOGIN_ERROR",
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
