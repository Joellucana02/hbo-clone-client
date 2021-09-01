import React from "react";
import { useState, useEffect } from "react";

const Login = () => {
  const [{ email, password }, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("hello world");
  };
  const inputStyle = {
    background: "#333",
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setFormValues({ email: e.target.value })}
          style={inputStyle}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          style={inputStyle}
        />
        <input type="submit" value="LOGIN" style={inputStyle} />
      </form>
    </>
  );
};

export default Login;
