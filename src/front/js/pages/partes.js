import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedMenu } from "../component/logged-menu";
import { ParteNocturno } from "../component/parteNocturno";
import { ParteQuincenal } from "../component/parteQuincenal";
import { useParams } from "react-router-dom";
import "../../styles/partes.css";

export const Partes = () => {
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

  /*useEffect(() => {
    if (!store.userdata.id) {
      navigate("/login");
    }
  }, []);*/
  return (
    <div className="partes">
      <LoggedMenu />
      <div className="d-flex justify-content-center p-5">
        <button className="btn btn-1" onClick={displayNoc}>
          Parte Nocturno
        </button>
        <button className="btn btn-2" onClick={displayQuin}>
          Parte Quincenal
        </button>
      </div>
      {showNoc ? <ParteNocturno /> : showQuin ? <ParteQuincenal /> : null}
    </div>
  );
};
