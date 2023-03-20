import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoggedMenu } from "../component/logged-menu";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {store.userdata.role_user == 1 ? <LoggedMenu /> : null}
      <video autoPlay loop id="video" className="img-fluid">
        <source
          src="https://abeceweb.com/video/pexels-anna-shvets-5516398.mp4"
          type="video/mp4"
        />
      </video>
      <div className="container text-center mt-5">
        <div className="heading row my-3">
          <div className="img-heading col-4">
            <img
              src="https://res.cloudinary.com/dhqruwnj9/image/upload/v1679328988/Azahar_grande_l5pl7m.png"
              className="rounded-circle"
            ></img>
          </div>
          <div className="heading-content col-8">
            <div className="d-flex align-items-center h-100">
              <div>
                <h1>Residencia Azahar</h1>
                <p>
                  Reducir el estrés y el poder relajante, serían algunos de los
                  beneficios de la flor de azahar, por no hablar del rico olor
                  que desprenden los naranjos y los limoneros cuando están
                  floreciendo. Es imposible no cerrar los ojos para disfrutar de
                  esa fragancia embriagadora.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'url("https://residenciaelcarmen.com/wp-content/uploads/2019/10/exteriores-y-jardines-residencia-el-carmen-01-800x800.jpg")',
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Experiencia
                </h3>
                <p>
                  Ubicada en Marbella, Residencia Azahar fue fundada en 1999 y
                  desde entonces nuestros años de experiencia al servicio de
                  nuestros mayores nos avalan.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'url("https://www.seniorsresidencias.es/wp-content/uploads/2022/04/SENIORS-Residencias-Marbella-1.jpg")',
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Calidad
                </h3>
                <p>
                  Nuestra mayor satisfacción es la de seguir mereciendo el
                  respeto de todas las familias que en algún momento han
                  necesitado de nuestros servicios y que por nuestro centro
                  residencial han pasado.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'url("https://www.seniorsresidencias.es/wp-content/uploads/2022/04/SENIORS-Residencias-Marbella-5.jpg")',
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Servicios
                </h3>
                <p>
                  Estamos en condiciones de prestar un servicio completo,
                  profesional e individualizado para cada residente-usuario.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row testimonials h-25">
          <h2 className="text-center">TESTIMONIOS</h2>
          <div className="col border rounded p-5 m-3">
            <i className="fa fa-comment"></i>
            <p>
              Dar las gracias al equipo de la residencia Azahar. Por su cuidado
              y su bien hacer con las personas mayores . Muchas gracias.
            </p>
            <p>Señora Haro</p>
          </div>
          <div className="col border rounded p-5 m-3">
            <i className="fa fa-comment"></i>
            <p>
              Quiero agradecer al personal y a la dirección de Residencia Azahar
              la amabilidad y la ayuda que nos han brindado a la persona que han
              tenido a su cargo y a sus allegados. El trato que hemos recibido y
              que les hemos visto dar a los demás ha sido profesional y
              cariñoso, y el ambiente siempre afable y tranquilo, en un entorno
              muy bonito.
            </p>
            <p>Señor Paco</p>
          </div>
          <div className="col border rounded p-5 m-3">
            <i className="fa fa-comment"></i>
            <p>
              Es más que una residencia, es el hogar de todos y cada uno de los
              abuelos que en ella residen. El equipo de profesionales que en
              ella trabajamos lo hacemos para ellos con mucho cariño, dedicación
              y empatia por ellos y sus familiares.
            </p>
            <p>Señor Marcial</p>
          </div>
        </div>
      </div>
    </>
  );
};
