import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
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
      console.log(data);
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
    <>
      <div className="d-flex justify-content-center  ">
        {/* DIV de tarjetas */}
        <div className="col-md-6 col-sm-6 d-flex justify-content-center ">
          <div className=" row mx-auto my-5 d-none d-sm-block">
            <div className="card mb-3 p-1" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://res.cloudinary.com/dhqruwnj9/image/upload/v1679230508/grafico_pc_hyhphr.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">PARTES DIARIOS</h5>
                    <p className="card-text">Consultar los partes nocturnos diarios y partes quincenales del familiar</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 p-1" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://res.cloudinary.com/dhqruwnj9/image/upload/v1679230494/calendario_ftithk.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">TRÁMITES ÁGILES</h5>
                    <p className="card-text">Solicitar un permiso de visita o un permiso de salida de forma totalmente online.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 p-1" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://res.cloudinary.com/dhqruwnj9/image/upload/v1679230696/email-g1fb2123c6_1280_dsvd3m.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">COMUNICACIÓN </h5>
                    <p className="card-text">Contactar con su familiar, asi como con el equípo médico.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* DIV de LOGIN */}
        <div className="col mx-auto">
          <div className="login-card row border p-0 my-5 ">
            <div className="col-md-6 col-sm-12 login-der justify-content-center">
              <h2 className="text-center m-3 fs-1 justify-content-center">
                <i className="fa-solid fa-circle-user my-3 icono-login"></i>
              </h2>
              <div className="d-grid my-3 justify-content-center gap-2">
                <div className=" form-floating ">
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
                  <label htmlFor="email"> <i className="fa-solid fa-envelope"></i> Email</label>
                </div>
                <div className="col form-floating">
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
                  <label htmlFor="password"><i className="fa-solid fa-lock"></i> Password</label>
                </div>
                <div className="d-grid text-center mt-3">
                  <button
                    className="btn btn-primary btn-lg rounded-pill "
                    onClick={() => sendLoginCredential()}
                  >
                    Login
                  </button>
                  {error ? (
                    <p className="alert alert-warning rounded mt-2">Error en crendenciales</p>
                  ) : null}
                </div>
                <div className="mt-3 ">
                  <p className="text-end">Forgot your password?</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 login-foto d-none d-md-block">
            </div>
          </div>
        </div>
      </div>


      {/* 
    <div className="row row-sm mx-auto mb-3">
      <div className="col-sm-4 ">
          <div className="card" style={{width: "14rem"}}>
                  <img src="https://res.cloudinary.com/dhqruwnj9/image/upload/v1679230508/grafico_pc_hyhphr.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">PARTES DIARIOS</h5>
                  <p className="card-text">Consultar los partes nocturnos de cada día y partes quincenales del familiar</p>
              </div>
          </div>
        </div>
        <div className="col-sm-4 ">
          <div className="card" style={{width: "14rem"}}>
                  <img src="https://res.cloudinary.com/dhqruwnj9/image/upload/v1679230494/calendario_ftithk.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">TRÁMITES ÁGILES</h5>
                  <p className="card-text">Solicitar un permiso de visita o un permiso de salida de forma totalmente online</p>
              </div>
          </div>
        </div>
        <div className="col-sm-4 ">
          <div className="card" style={{width: "14rem"}}>
                  <img src="https://res.cloudinary.com/dhqruwnj9/image/upload/v1679230696/email-g1fb2123c6_1280_dsvd3m.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">COMUNICACIÓN </h5>
                  <p className="card-text">Contactar con su familiar, asi como con el equípo médico.</p>
              </div>
        </div>
      </div>
    </div>
  */}
    </>
  );
};
