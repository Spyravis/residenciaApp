import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";
import logo from "./../../img/logo.png";

export const Login = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const sendLoginCredential = async () => {
    const response = await fetch(process.env.BACKEND_URL + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      await actions.getCurrentUserEmail();
      navigate("/myHome");
    } else {
      setError(true);
    }
  };

  return (
    <div className="container d-flex  justify-content-center  mt-5">
      <div className="border rounded p-2">
        <img className="img-fluid" src={logo} alt="logo" width="300" />
      </div>
      <div className="border rounded p-2 bg-secondary bg-gradient bg-opacity-75">
        <h2 className="text-center m-3">Login </h2>
        <div className="row my-3">
          <label className="col-sm-2 col-form-label" htmlFor="email">
            Email:{" "}
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setError(false);
                setEmail(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="row my-3">
          <label className="col-sm-2 col-form-label" htmlFor="password">
            Password:{" "}
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setError(false);
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="text-center mt-3 p-3 ">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => sendLoginCredential()}
            >
              Login
            </button>
            {error ? (
              <p className="alert alert-warning">Error en crendenciales</p>
            ) : null}
          </div>
          <div>
            <p>Forgot your password?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
