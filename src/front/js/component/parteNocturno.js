import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/partes.css";

export const ParteNocturno = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [resident, setResident] = useState("");
  const [incidencia, setIncidencia] = useState(false);

  const [parte, setParte] = useState({ resident: {}, user: {} });
  const [day, setDay] = useState(new Date().toLocaleDateString());

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
  if (store.userdata.role_user == 2) {
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
            <div className="col-md-8 p-3">
              <h4 className="nocturno-container justify-content-center">
                Nuevo parte Nocturno {day}
              </h4>
              <div className="col-auto">
                <label className=" col-form-label" htmlFor="resident">Residente:</label>
                <select className="form-select" name="resident" onChange={(e) => {
                  setResident(e.target.value);
                }}
                >
                  {store.userdata.residents
                    ? store.userdata.residents.map((resident, index) => {
                      return (
                        <option key={index} value={resident.id}>
                          {resident.name} {resident.surname}
                        </option>
                      );
                    })
                    : null}
                </select>
              </div>
              <div className="col-auto px-3">
                <input type="radio" id="incidencia" name="incidencia" onChange={(e) => {
                  setIncidencia(true);
                }}
                />
                <label className="p-2" htmlFor="incidencia"> Incidencia{" "} </label>

                <input type="radio" id="sinIncidencia" name="incidencia" onChange={(e) => {
                  setIncidencia(false);
                }}
                />
                <label htmlFor="sinIncidencia"> Sin Incidencia </label>
              </div>


              <div className="input-group mb-3">
                <span className="input-group-text col-6" id="basic-addon1"><i className="fa-solid fa-chart-line"></i> Azúcar:</span>
                <input type="text" className="form-control" placeholder={parte.sugar_level} aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text col-6" id="basic-addon1"><i className="fa-solid fa-chart-line"></i> Oxígeno:</span>
                <input type="text" className="form-control" placeholder={parte.oxygen_level} aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text col-6" id="basic-addon1"><i className="fa-solid fa-chart-line"></i> Colesterol:{" "}</span>
                <input type="text" className="form-control" placeholder={parte.cholesterol_level} aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text col-6" id="basic-addon1"><i className="fa-solid fa-chart-line"></i> Leucocitos:{" "}</span>
                <input type="text" className="form-control" placeholder={parte.leukocytes} aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text col-6" id="basic-addon1"><i className="fa-solid fa-chart-line"></i> Glóbulos rojos:{" "}</span>
                <input type="text" className="form-control" placeholder={parte.redbloods_level} aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text col-6" id="basic-addon1"><i className="fa-solid fa-chart-line"></i> Glóbulos blancos:{" "}</span>
                <input type="text" className="form-control" placeholder={parte.whitebloods_level} aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"><i className="fa-solid fa-circle-exclamation"></i>Observaciones:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">{parte.comments}</textarea></div>
              <button className="btn btn-agendar-visita mt-2 " onClick={async () => { enviarParte(); }}>
                Enviar Parte
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (store.userdata.role_user == 1) {
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
                    <h5>
                      {parte.resident.name} {parte.resident.surname}
                    </h5>
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
                    <i className="fa-solid fa-circle-exclamation"></i>{" "}
                    Observaciones:
                    {parte.comments}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
