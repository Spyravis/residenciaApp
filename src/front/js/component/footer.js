import React, { Component } from "react";

export const Footer = () => (
	<footer
		className="mt-auto text-center text-lg-start text-dark" style={{ backgroundColor: "#ECEFF1" }}>

		<section
			className="d-flex justify-content-between p-4 text-white"
			style={{ backgroundColor: "#21D192" }}
		>

			<div className="me-5">
				<span>Estate al dia siguiendo nuestras redes sociales</span>
			</div>

			<div>
				<a href="" className="text-white me-4">
					<i className="fab fa-facebook-f"></i>
				</a>

				<a href="" className="text-white me-4">
					<i className="fab fa-instagram"></i>
				</a>
				<a href="" className="text-white me-4">
					<i className="fab fa-youtube"></i>
				</a>

			</div>

		</section>



		<section className="">
			<div className="container text-center text-md-start mt-5">

				<div className="row mt-3">

					<div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">

						<h6 className="text-uppercase fw-bold">Residencia Azahar</h6>
						<hr
							className="mb-4 mt-0 d-inline-block mx-auto"
							style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
						/>
						<p>
							Reducir el estrés y el poder relajante, serían algunos de los beneficios de la flor de azahar, por no hablar del rico olor que desprenden los naranjos y los limoneros cuando están floreciendo. Es imposible no cerrar los ojos para disfrutar de esa fragancia embriagadora.
						</p>
					</div>

					<div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">

						<h6 className="text-uppercase fw-bold">Azahar</h6>
						<hr
							className="mb-4 mt-0 d-inline-block mx-auto"
							style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
						/>
						<p>
							<a href="#!" className="text-dark">Experiencia</a>
						</p>
						<p>
							<a href="#!" className="text-dark">Calidad</a>
						</p>
						<p>
							<a href="#!" className="text-dark">Servicios</a>
						</p>
						<p>
							<a href="#!" className="text-dark">Instalaciones</a>
						</p>
					</div>


					<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

						<h6 className="text-uppercase fw-bold">Contacto</h6>
						<hr
							className="mb-4 mt-0 d-inline-block mx-auto"
							style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
						/>
						<p><i className="fas fa-home mr-3"></i> Marbella</p>
						<p><i className="fas fa-envelope mr-3"></i> info@residenciaazahar.com</p>
						<p><i className="fas fa-phone mr-3"></i> 634 567 88</p>
						<p><i className="fas fa-print mr-3"></i> 682 456 00</p>
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

	</footer>
);
