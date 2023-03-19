import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/logged-menu.css";

export const LoggedMenu = () => {
  const { store, actions } = useContext(Context);
  return (

    <div className="row justify-content-md-center">
      <div className="container-fluid myMenu  text-center  col">
        <div className="btn-group m-2" role="group" aria-label="First group">
          <Link to="/myHome">
            <button className="btn  btn-logged p-2">Inicio</button>
          </Link>
        </div>        <div className="btn-group m-2" role="group" aria-label="First group">
          <Link to="/myVisits">
            <button className="btn   btn-logged p-2">Mis visitas</button>
          </Link>
        </div>
        <div className="btn-group m-2" role="group" aria-label="First group">
          <Link to="/profile">
            <button className="btn  btn-logged p-2">Perfil</button>
          </Link>
        </div>
        <div className="btn-group m-2" role="group" aria-label="First group">
          <Link to="/partes">
            <button className="btn  btn-logged p-2">Partes</button>
          </Link>
        </div>
        <div className="btn-group m-2" role="group" aria-label="First group">
          <Link to="/messages">
            <button className="btn  btn-logged p-2 position-relative">
              Mensajeria
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                {store.unreadedMessages}
                <span className="visually-hidden">Mensajes sin leer</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};