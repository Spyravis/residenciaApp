import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const ParteNocturno = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    fetch(
      `https://3001-spyravis-residenciaapp-n2elmvmu4h1.ws-eu87.gitpod.io/parte/`
    );
  }, []);

  return (
    <div className="card text-center">
      <div className="card-header">Paciente: Periquito de los Palotes </div>
      <div className="card-body">
        <div class="input-group">
          <div className="input-group-text">
            <label
              className="form-check-input mt-0"
              type="radio"
              value=""
              aria-label="Radio button for following text input"
            ></label>
          </div>
          <label
            type="text"
            className="form-control"
            aria-label="Text input with radio button"
          >
            Noche sin incidencia
          </label>
        </div>
        <div className="input-group">
          <div className="input-group-text">
            <label
              className="form-check-input mt-0"
              type="radio"
              value=""
              aria-label="Radio button for following text input"
            ></label>
          </div>
          <label
            type="text"
            className="form-control"
            aria-label="Text input with radio button"
          >
            Noche con incidencia
          </label>
        </div>
      </div>
      <div></div>
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-start">
          Observaciones:
        </h5>
        <p className="card-text"></p>
      </div>
    </div>
  );
};
