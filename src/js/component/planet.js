import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planet = props => {
	const { store } = useContext(Context);
	const peoplename = props.match.params.planet;
	return (
		<>
			<div className="container">
				<div className="card-group">
					<div className="row">
						{!!store.planets ? (
							store.planets.map((planet, i) => {
								if (JSON.stringify(planet.name) === JSON.stringify(peoplename)) {
									return (
										<div
											className="row card-group text-white bg-dark mb-3 d-flex justify-content-center"
											key={i}>
											<div className="col-3 my-auto">
												<img
													src="https://via.placeholder.com/200x400"
													className="card-img-top"
													alt={"image of "}
												/>
												<Link
													to={"/planets"}
													className="btn btn-secondary d-flex justify-content-center">
													Back to Planets!
												</Link>
											</div>
											<div className="col-9 py-4">
												<h5 className="card-title">{planet.name}</h5>
												<p className="card-text">Climate: {planet.climate}</p>
												<p className="card-text">Gravity: {planet.gravity}</p>
												<p className="card-text">Orbital period: {planet.orbital_period}</p>
												<p className="card-text">Population: {planet.population}</p>
												<p className="card-text">Rotation period: {planet.rotation_period}</p>
												<p className="card-text">Surface water: {planet.surface_water}</p>
												<p className="card-text">Terrain: {planet.terrain}</p>
												<p className="card-text">
													Observations: Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et dolore magna
													aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
													laboris nisi ut aliquip ex ea commodo consequat.
												</p>
											</div>
										</div>
									);
								}
							})
						) : (
							<div className="text-center" id="undefined">
								<div className="spinner-grow text-light" role="status">
									Hola
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export default Planet;
