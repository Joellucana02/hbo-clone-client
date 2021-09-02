import { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const INITIAL_USER = {
  user: JSON.parse(localStorage.getItem("megaUser")) || null,
  isFetching: false,
  error: null,
};
export const AuthContext = createContext(INITIAL_USER);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_USER);
  useEffect(() => {
    localStorage.setItem("megaUser", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
