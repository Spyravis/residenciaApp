import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedMenu } from "../component/logged-menu";
import { ParteNocturno } from "../component/parteNocturno";
import { ParteQuincenal } from "../component/parteQuincenal";
import { useParams } from "react-router-dom";

export const Partes = () => {
  const [showNoc, setShowNoc] = useState(true);
  const [showQuin, setShowQuin] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const displayNoc = () => {
    setShowNoc(true);
    setShowQuin(false);
  };
  const displayQuin = () => {
    setShowNoc(false);
    setShowQuin(true);
  };
  return (
    <div className="container">
      <LoggedMenu />
      <div className="d-flex justify-content-center p-5">
        <button className="btn btn-primary" onClick={displayNoc}>
          Parte Nocturno
        </button>
        <button className="btn btn-secondary" onClick={displayQuin}>
          Parte Quincenal
        </button>
      </div>
      {showNoc ? <ParteNocturno /> : showQuin ? <ParteQuincenal /> : null}
      <div className="d-flex justify-content-center p-5">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/historial")}
        >
          Historial
        </button>
      </div>
    </div>
  );
};
