import React from "react";
import { useState, useEffect } from "react";
const Register = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const handleLogin = () => {
    console.log("hello world");
  };
  return (
    <>
      <h2>Register</h2>
      <form action={handleLogin}>
        <input type="text" id="fname" name="fname" placeholder="Name" />
        <input type="email" id="email" name="email" placeholder="Email" />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Pick a strong password"
        />
        <input
          type="password"
          id="password-confirm"
          name="password-confirm"
          placeholder="Confirm your password"
        />
        <input type="submit" defaultValue="LOGIN" />
      </form>
    </>
  );
};

export default Register;
