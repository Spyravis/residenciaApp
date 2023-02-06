import React, { useContext } from "react";
import { Context } from "../store/appContext";
/*import bannerImage from "https://picsum.photos/1024/500";
import headingImage from "https://picsum.photos/300";
ejemplo importar con {headingImage}
*/
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-5">
			<div className="banner my-3">
				<img src="https://picsum.photos/1200/500" className="rounded img-fluid"></img>
			</div>
			<div className="heading row my-3">
				<div className="img-heading col-4">
					<img src="https://picsum.photos/300" className="rounded-circle"></img>
				</div>
				<div className="heading-content col-8">
					<div className="d-flex align-items-center h-100">
						<div>
							<h1>Residencia</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
				</div>

			</div>
			<div className="row testimonials h-25">
				<div className="col border rounded p-5 m-3">
					1
				</div>
				<div className="col border rounded p-5 m-3">
					2
				</div>
				<div className="col border rounded p-5 m-3">
					3
				</div>
			</div>
			<div className="carrousel">
				<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active" data-bs-interval="10000">
							<img src="https://picsum.photos/500/200" className="d-block w-100" alt="..."></img>
							<div className="carousel-caption d-none d-md-block">
								<h5>First slide label</h5>
								<p>Some representative placeholder content for the first slide.</p>
							</div>
						</div>
						<div className="carousel-item" data-bs-interval="2000">
							<img src="https://picsum.photos/500/200" className="d-block w-100" alt="..."></img>
							<div className="carousel-caption d-none d-md-block">
								<h5>Second slide label</h5>
								<p>Some representative placeholder content for the second slide.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="https://picsum.photos/500/200" className="d-block w-100" alt="..."></img>
							<div className="carousel-caption d-none d-md-block">
								<h5>Third slide label</h5>
								<p>Some representative placeholder content for the third slide.</p>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>

		</div>
	);
};
