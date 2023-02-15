import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const LoggedMenu = () => {
    return (
        <div className="row justify-content-md-center">
            <div className="myMenu bg-light p-5 col-6">
                <div className="btn-group m-2" role="group" aria-label="First group">
                    <Link to="/pacientes">
                        <button className="btn btn-warning p-5">Pacientes</button>
                    </Link>
                </div>
                <div className="btn-group m-2" role="group" aria-label="First group">
                    <Link to="/pacientes">
                        <button className="btn btn-info p-5">Perfil</button>
                    </Link>
                </div>
                <div className="btn-group m-2" role="group" aria-label="First group">
                    <Link to="/pacientes">
                        <button className="btn btn-success p-5">Partes</button>
                    </Link>
                </div>
                <div className="btn-group m-2" role="group" aria-label="First group">
                    <Link to="/messages">
                        <button className="btn btn-danger p-5">Mensajeria</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
