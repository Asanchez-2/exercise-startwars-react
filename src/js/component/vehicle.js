import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicle = props => {
	const { store } = useContext(Context);
	const peoplename = props.match.params.vehicle;
	return (
		<>
			<div className="container">
				<div className="card-group">
					<div className="row">
						{!!store.vehicles ? (
							store.vehicles.map((vehicle, i) => {
								if (JSON.stringify(vehicle.name) === JSON.stringify(peoplename)) {
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
													to={"/vehicles"}
													className="btn btn-secondary d-flex justify-content-center">
													Back to Vehicles!
												</Link>
											</div>
											<div className="col-9 py-4">
												<h5 className="card-title">{vehicle.name}</h5>
												<p className="card-text">Cargo capacity: {vehicle.cargo_capacity}</p>
												<p className="card-text">Consumables: {vehicle.consumables}</p>
												<p className="card-text">Cost: {vehicle.cost_in_credits}</p>
												<p className="card-text">Crew: {vehicle.crew}</p>
												<p className="card-text">Length: {vehicle.length}</p>
												<p className="card-text">Manufacturer: {vehicle.manufacturer}</p>
												<p className="card-text">Model: {vehicle.model}</p>
												<p className="card-text">Passengers: {vehicle.passengers}</p>
												<p className="card-text">Vehicle class: {vehicle.vehicle_class}</p>
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
export default Vehicle;
