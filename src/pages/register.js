import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthRegister } from "../context/ApiAuthCalls";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formValues);
    AuthRegister(formValues, dispatch);
    console.log(isFetching);
  };
  return (
    <>
      <h2>Register</h2>
      <form
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Name"
          onChange={(e) =>
            setFormValues({ ...formValues, username: e.target.value })
          }
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Pick a strong password"
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
        />
        <input
          type="password"
          id="password-confirm"
          name="password-confirm"
          placeholder="Confirm your password"
          onChange={(e) =>
            setFormValues({ ...formValues, passwordConfirm: e.target.value })
          }
        />
        <button
          type="submit"
          value="LOGIN"
          onClick={(e) => handleLogin(e)}
          disabled={isFetching}
          style={{ background: "#333" }}
        >
          SIGNUP
        </button>
      </form>
      <Link to="/login">Already have an account</Link>
    </>
  );
};

export default Register;
