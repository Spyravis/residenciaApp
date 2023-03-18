import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/schuddle.css";

export const Schuddle = () => {
  return (
    <div className=" row justify-content-md-center mt-3 p-3">
      <div className="col-md-5">
        <div className="row g-0 border  rounded agenda-visita ">
          <div className="col p-4 ">
            <h3 className="mb-0 ">Calendario de visita</h3>
            <p className="card-text mb-auto mt-5">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <Link to="/schuddleVisit">
              <button className="btn btn-primary btn-schuddle mt-5">Agendar visita</button>
            </Link>
          </div>
          <div className="col-md-4 agenda-visita-foto">
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="row g-0 border rounded ">
          <div className="col-md-4 permiso-salida-foto"></div>
          <div className="col p-4 ">
            <h3 className="mb-0">Permiso de salida</h3>
            <p className="card-text mb-auto mt-5">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <Link to="/exitPermit">
              <button className="btn btn-primary btn-schuddle justify-content-end mt-5">
                Permiso de Salida
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
