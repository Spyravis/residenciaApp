import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

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
      await actions.getCurrentUser();
      navigate("/myHome");
    } else {
      setError(true);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container d-flex  justify-content-center  mt-5">
      <div
        className="card bg-secondary bg-gradient bg-opacity-75 p-2 m-5"
        style={{ width: "18rem" }}
      >
        <h2 className="text-center m-3 fs-1 justify-content-center">
          <i className="fa-solid fa-circle-user"></i>
        </h2>
        <div className="d-grid my-3 justify-content-center gap-2">
          <div className="col">
            <input
              type="email"
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
          <div className="col">
            <input
              type="password"
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
          <div className="d-grid text-center mt-3">
            <button
              className="btn btn-primary btn-lg rounded-pill "
              onClick={() => sendLoginCredential()}
            >
              Login
            </button>
            {error ? (
              <p className="alert alert-warning">Error en crendenciales</p>
            ) : null}
          </div>
          <div className="mt-3">
            <p>Forgot your password?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
