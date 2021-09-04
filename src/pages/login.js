import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Authlogin } from "../context/ApiAuthCalls";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const { isFetching, dispatch } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    Authlogin(formValues, dispatch);
    console.log(isFetching);
  };
  const inputStyle = {
    background: "#333",
  };
  return (
    <>
      <h2>Login</h2>
      <form
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
          style={inputStyle}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
          style={inputStyle}
        />
        <button
          type="submit"
          value="LOGIN"
          style={inputStyle}
          onClick={(e) => handleLogin(e)}
          disabled={isFetching}
        >
          LOGIN
        </button>
      </form>
      <Link to="/signup">Dont have an account</Link>
    </>
  );
};

export default Login;
