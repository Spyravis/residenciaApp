import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const ParteNocturno = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const [parte, setParte] = useState({ resident: {}, user: {} });

  useEffect(() => {
    getparteNocturno();
  }, []);

  const getparteNocturno = async () => {
    const response = await fetch(
      process.env.BACKEND_URL + "/api/parteNocturno",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    setParte(data.result);
  };
  return (
    <div className="card text-center">
      <div className="card-header">Paciente: {parte.resident.name} </div>
      <p>Azúcar: {parte.sugar_level}</p>
      <p>Oxígeno: {parte.oxygen_level}</p>
      <p>Colesterol: {parte.cholesterol_level}</p>
      <p>Leucocitos: {parte.leukocytes_level}</p>
      <p>Glóbulos rojos: {parte.redbloods_level}</p>
      <p>Glóbulos blancos: {parte.whitebloods_level}</p>

      {parte.incidences ? (
        <h4>Noche con incidencia</h4>
      ) : (
        <h4>Noche sin incidencia</h4>
      )}
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-start">
          Observaciones:
          {parte.comments}
        </h5>
        <p className="card-text"></p>
      </div>
    </div>
  );
};
