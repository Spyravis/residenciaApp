import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import navbarLogo from "./../../img/navbarLogo.png";

export const Navbar = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light pt-2">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              className=""
              style={{ width: "auto", height: "70px" }}
              src={navbarLogo}
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
                  src={store.userdata.photo}
                />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
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
                  <button className="btn btn-warning">About Us</button>
                </Link>
              </div>
              <div
                className="btn-group me-2"
                role="group"
                aria-label="Second group"
              >
                <Link to="/contactUs">
                  <button type="button" className="btn btn-success">
                    Contact Us
                  </button>
                </Link>
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <Link to="/login">
                  <button type="button" className="btn btn-primary">
                    Área Personal
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
