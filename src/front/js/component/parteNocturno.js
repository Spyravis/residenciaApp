import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/partes.css";

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
    <div className="container d-flex justify-content-center align-item-center p-5">
      <div className="card mb-3" style={{ maxWidth: 700 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://enfermeriabuenosaires.com/wp-content/uploads/2019/04/Medical_463.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="nocturno-header">
              <div className="nocturno-container justify-content-center">
                {parte.incidences ? (
                  <h1>Noche con incidencia</h1>
                ) : (
                  <h1>Noche sin incidencia</h1>
                )}
                <div className="nocturno-body"></div>
                <u>
                  <h5>{parte.resident.name}</h5>
                </u>{" "}
              </div>
              <p>
                <i className="fa-solid fa-chart-line"></i> Azúcar:{" "}
                {parte.sugar_level}
              </p>
              <p>
                <i className="fa-solid fa-chart-line"></i> Oxígeno:{" "}
                {parte.oxygen_level}
              </p>
              <p>
                <i className="fa-solid fa-chart-line"></i> Colesterol:{" "}
                {parte.cholesterol_level}
              </p>
              <p>
                <i className="fa-solid fa-chart-line"></i> Leucocitos:{" "}
                {parte.leukocytes}
              </p>
              <p>
                <i className="fa-solid fa-chart-line"></i> Glóbulos rojos:{" "}
                {parte.redbloods_level}
              </p>
              <p>
                <i className="fa-solid fa-chart-line"></i> Glóbulos blancos:{" "}
                {parte.whitebloods_level}
              </p>
              <div className="card-title d-flex position bottom-0 start-0">
                <h6>
                  <i class="fa-solid fa-circle-exclamation"></i> Observaciones:
                  {parte.comments}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
