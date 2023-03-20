import React, { Component } from "react";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

//npm install react-cookie-consent

export const Footer = () => {
  return (
    <footer
      className="mt-auto text-center text-lg-start text-dark" style={{ backgroundColor: "#97B4C3" }}>

      <section
        className="d-flex justify-content-between p-4 text-white"
        style={{ backgroundColor: "#E1B393" }}
      >
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to="/myHome" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="/myHome" className="text-white me-4">
            <i className="fab fa-youtube"></i>
          </Link>

          <Link to="/myHome" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </section>

      <section className="d-none d-md-block">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <Link to="/" className="text-dark">
                <h6 className="text-uppercase fw-bold">AZAHAR</h6>
              </Link>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p className="text center">
                Cuidar de aquellos que nos han cuidado, más que un deber, un honor!
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold"> Links </h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p>
                <Link to="/login" className="text-dark">Área personal</Link>
              </p>

              <p>
                <Link to="/aboutUs" className="text-dark">About Us</Link>
              </p>
              <p>
                <Link to="/contactUs" className="text-dark">Contact Us</Link>
              </p>

            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 className="text-uppercase fw-bold">Datos de Contacto</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p><i className="fas fa-home mr-3"></i> Valencia 46023, ES</p>
              <p><i className="fas fa-envelope mr-3"></i> info@azahar.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 34 634 567 888</p>
            </div>

          </div>

        </div>
      </section>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-dark" href="https://residenciaapp.com/"
        >Residencia Azahar</a
        >
      </div>
      <CookieConsent debug={true}>This site uses cookies.</CookieConsent>
    </footer>
  );
}
