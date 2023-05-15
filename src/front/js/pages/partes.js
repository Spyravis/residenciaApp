import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { LoggedMenu } from "../component/logged-menu";
import { ParteNocturno } from "../component/parteNocturno";
import { ParteQuincenal } from "../component/parteQuincenal";
import { useParams } from "react-router-dom";
import "../../styles/partes.css";

export const Partes = () => {
  const { store, actions } = useContext(Context);
  const [showNoc, setShowNoc] = useState(true);
  const [showQuin, setShowQuin] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  //const { store, actions } = useContext(Context);
  const displayNoc = () => {
    setShowNoc(true);
    setShowQuin(false);
  };
  const displayQuin = () => {
    setShowNoc(false);
    setShowQuin(true);
  };

  useEffect(() => {
    if (!store.userdata.id) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="container">
      <LoggedMenu />
      <div className="container-fluid myMenu  text-center  col">
        <div className="btn-group m-2" role="group" aria-label="First group">
          <button className="btn  btn-logged p-2" onClick={displayNoc}>Parte Nocturno</button>
        </div>{" "}
        <div className="btn-group m-2" role="group" aria-label="First group">
          <button className="btn   btn-logged p-2" onClick={displayQuin}>
            Parte Quincenal
          </button>
        </div>
        {showNoc ? <ParteNocturno /> : showQuin ? <ParteQuincenal /> : null}
      </div>
    </div>
  );
};
