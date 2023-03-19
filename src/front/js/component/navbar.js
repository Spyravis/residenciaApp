import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import azaharNav from "./../../img/azaharNav.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar ">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              className=""
              style={{ width: "auto", height: "50px" }}
              src="https://res.cloudinary.com/dhqruwnj9/image/upload/v1679248348/LOGO_AZAHAR_2_mbmzcq.png"
            />
          </span>
        </Link>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          {store.userdata.email ? (
            <>
              <div
                className="position-relative mx-4"
                onClick={async () => {
                  navigate("/messages");
                }}
              >
                <img
                  className=""
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  src={store.userdata.photo ? store.userdata.photo : "https://res.cloudinary.com/dhqruwnj9/image/upload/v1679246283/ad57b11e313616c7980afaa6b9cc6990_iumvqv.jpg"}
                />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  {store.unreadedMessages}
                  <span className="visually-hidden">Mensajes sin leer</span>
                </span>
              </div>
              <button
                type="button"
                className="btn btn-danger position-relative"
                onClick={async () => {
                  navigate("/");
                  await actions.logout();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <div
                className="btn-group me-2"
                role="group"
                aria-label="First group"
              >
                <Link to="/aboutUs">
                  <button className="btn btn-nav ">SOBRE NOSOTROS</button>
                </Link>
              </div>
              <div
                className="btn-group me-2"
                role="group"
                aria-label="Second group"
              >
                <Link to="/contactUs">
                  <button type="button" className="btn btn-nav ">
                    CONTÁCTANOS
                  </button>
                </Link>
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <Link to="/login">
                  <button type="button" className="btn btn-login-nav">
                    ÁREA PERSONAL
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
