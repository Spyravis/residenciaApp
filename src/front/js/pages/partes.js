import React, { useState } from "react";
import { LoggedMenu } from "../component/logged-menu";
import { ParteNocturno } from "../component/parteNocturno";
import { ParteQuincenal } from "../component/parteQuincenal";

export const Partes = () => {
  const [showNoc, setShowNoc] = useState(false);
  const [showQuin, setShowQuin] = useState(false);

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
      {showNoc ? <ParteNocturno /> : showQuin ? <ParteQuincenal /> : ""}
    </div>
  );
};
