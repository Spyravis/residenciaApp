import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/schuddle.css";

export const Schuddle = () => {
  return (
    <div className=" row justify-content-md-center my-3 p-3">
      <div className="col-md-6">
        <div className="row g-0 border rounded agenda-visita ">
          <div className="col p-4 ">
            <h3 className="mb-0 ">Calendario de visita</h3>
            <p className="card-text mb-auto mt-5">
              Agende su visita, ya sea presencial o por video llamada!
            </p>
            <Link to="/schuddleVisit">
              <button className="btn btn-primary btn-schuddle mt-5">
                Agendar visita
              </button>
            </Link>
          </div>
          <div className="col-md-4  rounded agenda-visita-foto d-none d-sm-block">
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded permiso-salida">
          <div className="col p-4 ">
            <h3 className="mb-0">Permiso de salida</h3>
            <p className="card-text mb-auto mt-5">
              Solicite un permiso de salida y comparta momentos junto a su familiar
            </p>
            <Link to="/exitPermit">
              <button className="btn btn-primary btn-schuddle  mt-5">
                Permiso de Salida
              </button>
            </Link>
          </div>
          <div className="col-md-4 rounded permiso-salida-foto d-none d-sm-block"></div>
        </div>
      </div>
    </div>
  );
};
