import React, { useState, useEffect } from "react";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: null,
      };
    case "LOGIN_ERROR":
      return {
        user: null,
        isFetching: false,
        error: "",
      };
    default:
      return { ...state };
  }
};
