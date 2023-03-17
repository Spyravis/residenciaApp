import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { LoggedMenu } from "../component/logged-menu";

export const Historial = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}/api/parte/${localStorage.getItem("id")}`)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, []);

  const handleClick = (e) => {
    navigate(`/historial/${localStorage.getItem("id")}`);
  };

  return (
    <div className="text-center mt-5">
      <LoggedMenu />
      <div className="card text-center">
        <div className="card-header">
          {" "}
          Historial Partes <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="card-body"></div>
        <div className="d-flex align-items-center">
          <button type="button">Más</button>
          <div
            className="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  );
};
