import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light p-3">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">ACA VA EL LOGO</span>
        </Link>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group me-2" role="group" aria-label="First group">
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
        </div>
      </div>
    </nav>
  );
};
