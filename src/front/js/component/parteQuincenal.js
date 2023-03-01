import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const ParteQuincenal = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const handleQuincenal = () => {};
  useEffect(() => {
    fetch(
      `https://3001-spyravis-residenciaapp-n2elmvmu4h1.ws-eu87.gitpod.io/parte/`
    );
  }, []);

  return (
    <ul class="list-group">
      <li class="list-group-item disabled" aria-disabled="true">
        Resultados de chequeo quincenal:
      </li>
      <li class="list-group-item">Nivel de oxígeno en sangre:</li>
      <li class="list-group-item">Niveles de glucosa en sangre:</li>
      <li class="list-group-item">Movilidad:</li>
      <li class="list-group-item">
        Escaras:
        <button class="btn btn-outline-secondary" type="button">
          Si
        </button>
        <button class="btn btn-outline-secondary" type="button">
          No
        </button>
      </li>
      <li class="list-group-item d-flex justify-content-start">
        Observaciones:{" "}
      </li>
    </ul>
  );
};
