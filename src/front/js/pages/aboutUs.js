import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const AboutUs = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container p-2 my-2  ">
      <div className="container row my-2 text-center d-flex justify-content-center">
        <h2 className="text-center mt-2">NUESTROS PROFESIONALES</h2>
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src="https://res.cloudinary.com/dhqruwnj9/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1679263670/psicologa_xk2rip.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Piscóloga</p>
          </div>
        </div>
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src="https://res.cloudinary.com/dhqruwnj9/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1679263523/enfermera_2_dkzhu6.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Enfermera</p>
          </div>
        </div>
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src="https://res.cloudinary.com/dhqruwnj9/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1679263522/foto_medica_1_tjewow.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Médica</p>
          </div>
        </div>
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src="https://res.cloudinary.com/dhqruwnj9/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1679263522/administrativa_nqoag1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Administrativa</p>
          </div>
        </div>
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src="https://res.cloudinary.com/dhqruwnj9/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1679264328/Fisioterapeuta_qkliyt.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Fisioterapeuta</p>
          </div>
        </div>
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src="https://res.cloudinary.com/dhqruwnj9/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1679264333/Enfermera_qhyjqw.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Enfermera</p>
          </div>
        </div>
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src="https://res.cloudinary.com/dhqruwnj9/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1679264577/Enfermero_2_s04npm.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Enfermero</p>
          </div>
        </div>
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src="https://res.cloudinary.com/dhqruwnj9/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1679264660/trabajadora_social_ijm0wk.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Trabajadora Social</p>
          </div>
        </div>
      </div>

      <div className="container text-center my-3">
        <h2 className="my-5">NUESTRAS INSTALACIONES</h2>
        <div className="carrousel">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="https://res.cloudinary.com/dhqruwnj9/image/upload/v1679267681/residencia_c5fbtf.jpg"
                  className="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://res.cloudinary.com/dhqruwnj9/image/upload/v1679267681/sala-estar-residencia-mayores-almenara_b4o2jg.jpg"
                  className="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dhqruwnj9/image/upload/v1679267681/jardin_wdfc4a.jpg"
                  className="d-block w-100"
                  alt="..."
                ></img>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container text-center my-3">
        <h2 className="my-5">NUESTROS SERVICIOS</h2>
        <div className="row ">
          <div className="col-sm-4">
            <h4>
              <i className="fa-solid fa-user-doctor"></i> Servicio médico
            </h4>
            <p>
              Disponemos de servicio médico de forma diaria para el control y
              evolución del residente, supervisión de fármacos y gestiones
              hospitalarias.
            </p>
          </div>
          <div className="col-sm-4">
            <h4>
              <i className="fa-solid fa-wheelchair"></i> Servicio de Enfermería
            </h4>
            <p>
              Control y cuidados del residente, gestión de citas médicas y
              seguimiento de todos los registros en general del usuario.
            </p>
          </div>
          <div className="col-sm-4">
            <h4>
              <i className="fa-solid fa-users"></i> Atención social
            </h4>
            <p>
              Disponemos de servicio médico de forma diaria para el control y
              evolución del residente, supervisión de fármacos y gestiones
              hospitalarias.
            </p>
          </div>
          <div className="col-sm-4">
            <h4>
              <i className="fa-solid fa-paintbrush"></i> Talleres, Cursos y
              Actividades
            </h4>
            <p>
              Fomentar la participación de los residentes a través de las
              actividades lúdicas, con el fin de alcanzar su integración en la
              vida social del centro residencial.
            </p>
          </div>
          <div className="col-sm-4">
            <h4>
              <i className="fa-regular fa-lightbulb"></i> Servicio de Psicología
            </h4>
            <p>
              Tratamientos individualizados como grupales para conseguir que el
              residente pueda disfrutar de una mejor calidad de vida tanto
              psicológicamente como funcionalmente.
            </p>
          </div>
          <div className="col-sm-4">
            <h4>
              <i className="fa-solid fa-bed"></i> Servicio de Habitaciones
            </h4>
            <p>Limpieza completa diaria de las habitaciones.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
