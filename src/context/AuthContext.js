import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const INITIAL_USER = {
  user: null,
  isFetching: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_USER);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_USER);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
      }}
      myDispatch={dispatch}
    >
      {children}
    </AuthContext.Provider>
  );
};
