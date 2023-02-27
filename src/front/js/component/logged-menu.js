import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const LoggedMenu = () => {
  return (
    <div className="row justify-content-md-center">

      <div className="myMenu bg-light text-center p-3 col">
        <div className="btn-group m-2" role="group" aria-label="First group">
          <Link to="/myHome">
            <button className="btn btn-secondary p-2">Inicio</button>

      <div className="myMenu bg-light p-5 col-6">
        <div className="btn-group m-2" role="group" aria-label="First group">
          <Link to="/myHome">
            <button className="btn btn-secondary p-5">Inicio</button>

          </Link>
        </div>
        <div className="btn-group m-2" role="group" aria-label="First group">
          <Link to="/pacientes">

            <button className="btn btn-warning p-2">Pacientes</button>
          </Link>
        </div>
        <div className="btn-group m-2" role="group" aria-label="First group">
          <Link to="/pacientes">
            <button className="btn btn-info p-2">Perfil</button>
          </Link>
        </div>
        <div className="btn-group m-2" role="group" aria-label="First group">
          <Link to="/pacientes">
            <button className="btn btn-success p-2">Partes</button>

            <button className="btn btn-warning p-5">Pacientes</button>
          </Link>
        </div>
        <div className="btn-group m-2" role="group" aria-label="First group">
          <Link to="/profile">
            <button className="btn btn-info p-5">Perfil</button>
          </Link>
        </div>
        <div className="btn-group m-2" role="group" aria-label="First group">
          <Link to="/partes">
            <button className="btn btn-success p-5">Partes</button>

          </Link>
        </div>
        <div className="btn-group m-2" role="group" aria-label="First group">
          <Link to="/messages">

            <button className="btn btn-danger p-2">Mensajeria</button>

            <button className="btn btn-danger p-5">Mensajeria</button>

          </Link>
        </div>
      </div>
    </div>
  );
};
