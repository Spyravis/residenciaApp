import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const ParteNocturno = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext({ Context });
  const handleNocturno = () => {};
  return (
    <div className="col">
      <div className="card">
        <button
          type="button"
          class="btn btn-primary btn-lg"
          onClick={() => {
            handleNocturno;
          }}
        >
          Parte Nocturno
        </button>
      </div>
    </div>
  );
};

export default ParteNocturno;
