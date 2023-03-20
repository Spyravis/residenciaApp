import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoggedMenu } from "../component/logged-menu";
import { Context } from "../store/appContext";
import slide1 from "../../img/slide1.jpg";
import slide2 from "../../img/slide2.jpg";
import slide3 from "../../img/slide3.jpg";
import logo from "../../img/azahar.png"
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {store.userdata.role_user == 1 ? <LoggedMenu /> : null}
      <video autoPlay loop id="video" className="img-fluid">
        <source src="https://abeceweb.com/video/pexels-anna-shvets-5516398.mp4" type="video/mp4" />
      </video>
      <div className="container text-center mt-5">
        <div className="heading row my-3">
          <div className="img-heading col-4">
            <img
              src={logo}
              className="rounded-circle w-50"
            ></img>
          </div>
          <div className="heading-content col-8">
            <div className="d-flex align-items-center h-100">
              <div>
                <h1>Residencia Azahar</h1>
                <p>Reducir el estrés y el poder relajante, serían algunos de los beneficios de la flor de azahar, por no hablar del rico olor que desprenden los naranjos y los limoneros cuando están floreciendo. Es imposible no cerrar los ojos para disfrutar de esa fragancia embriagadora.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: 'linear-gradient(rgba(250,250,250, 0.7),rgba(250,250,250, 0.3)), url("https://residenciaelcarmen.com/wp-content/uploads/2019/10/exteriores-y-jardines-residencia-el-carmen-01-800x800.jpg")' }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Experiencia</h3>
                <p>Ubicada en Marbella, Residencia Azahar fue fundada en 1999 y desde entonces nuestros años de experiencia al servicio de nuestros mayores nos avalan.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: 'linear-gradient(rgba(250,250,250, 0.7),rgba(250,250,250, 0.3)),url("https://www.seniorsresidencias.es/wp-content/uploads/2022/04/SENIORS-Residencias-Marbella-1.jpg")' }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Calidad</h3>
                <p>Nuestra mayor satisfacción es la de seguir mereciendo el respeto de todas las familias que en algún momento han necesitado de nuestros servicios y que por nuestro centro residencial han pasado.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: 'linear-gradient(rgba(250,250,250, 0.7),rgba(250,250,250, 0.3)),url("https://www.seniorsresidencias.es/wp-content/uploads/2022/04/SENIORS-Residencias-Marbella-5.jpg")' }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Servicios</h3>
                <p>Estamos en condiciones de prestar un servicio completo, profesional e individualizado para cada residente-usuario.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row testimonials h-25">
          <div className="col border rounded p-5 m-3"><i className="fa fa-comment"></i><p>Dar las gracias al equipo de la residencia El Carmen. Por su cuidado y su bien hacer con las personas mayores . Muchas gracias.</p>
            <p>Señora Haro</p>
          </div>
          <div className="col border rounded p-5 m-3"><i className="fa fa-comment"></i><p>Quiero agradecer al personal y a la dirección de Residencia El Carmen la amabilidad y la ayuda que nos han brindado a la persona que han tenido a su cargo y a sus allegados. El trato que hemos recibido y que les hemos visto dar a los demás ha sido profesional y cariñoso, y el ambiente siempre afable y tranquilo, en un entorno muy bonito.</p>
            <p>Señor Paco</p></div>
          <div className="col border rounded p-5 m-3"><i className="fa fa-comment"></i><p>Es más que una residencia, es el hogar de todos y cada uno de los abuelos que en ella residen. El equipo de profesionales que en ella trabajamos lo hacemos para ellos con mucho cariño, dedicación y empatia por ellos y sus familiares.</p>
            <p>Señor Marcial</p></div>
        </div>
        <div className="carrousel my-5">
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
                  src={slide1}
                  className="d-block w-100 img-fluid"
                  alt="..."
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Localización inmejorable</h5>
                  <p>
                    Lugar con encanto, pequeño paraíso en el centro de Marbella.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={slide2}
                  className="d-block w-100 img-fluid"
                  alt="..."
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={slide3}
                  className="d-block w-100 img-fluid"
                  alt="..."
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
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
    </>
  );
};
