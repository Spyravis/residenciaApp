import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const parteQuincenal = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext({ Context });
  const handleQuincenal = () => {};
  return (
    <div className="col">
      <div className="card">
        <button
          type="button"
          class="btn btn-primary btn-lg"
          onClick={() => {
            handleQuincenal;
          }}
        >
          Parte Quincenal
        </button>
      </div>
    </div>
  );
};

export default parteQuincenal;
