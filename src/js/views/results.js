import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import CardPeople from "../component/CardPeople";
import CardVehicles from "../component/CardVehicles";
import CardPlanets from "../component/CardPlanets";
import SearchBar from "../component/searchBar";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Results = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<div>
				<img
					className="mainLogo"
					src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d2f3d93-e8b3-4e6d-bc04-80d1b99db218/d97g7bt-8fabadb3-b940-48b7-a612-00c4bec89ddd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNGQyZjNkOTMtZThiMy00ZTZkLWJjMDQtODBkMWI5OWRiMjE4XC9kOTdnN2J0LThmYWJhZGIzLWI5NDAtNDhiNy1hNjEyLTAwYzRiZWM4OWRkZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Zz2vrPSjOIomx3zIY7QfQdTYUuFmfpfmyBVZjsskVFI"
				/>
			</div>
			<SearchBar />
			<React.Fragment>
				<div className="container-fluid">
					<h1 id="Characters" className="main-title text-center m-3">
						Characters
					</h1>
					<div className="row justify-content-md-center">
						{store.resultPeopleSearch.map(person => (
							<React.Fragment key={person.name}>
								<div className="card-deck">
									<div className="col-3 col-md-4 col-sm-1 mb-4">
										<div className="card bg-light" style={{ width: "18rem" }}>
											<img
												className="card-img-top"
												src="https://via.placeholder.com/150x150"
												alt="Card image cap"
											/>
											<div className="card-body">
												<h3 className="card-title">{person.name}</h3>
												<p className="card-text">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
													dictum mattis risus non rutrum. Fusce eget tempor ante. Duis mattis.
												</p>
												<Link to={`single/people/${person.id}`}>
													<button type="button" className="btn btn-primary">
														Learn More
													</button>
												</Link>
												<i
													className="fab fa-gratipay float-right"
													href="#"
													onClick={e => actions.addToFavourite(person.name)}
												/>
											</div>
										</div>
									</div>
								</div>
							</React.Fragment>
						))}
					</div>
					<button
						className="btn btn-success"
						type="button"
						onClick={e => {
							console.log("clicked for nextPeople: ", store.peopleNext);
							actions.getData("people", store.peopleNext);
						}}>
						{"Show more results!"}
					</button>
				</div>
			</React.Fragment>
			<React.Fragment>
				<div className="container-fluid">
					<h1 id="Planets" className="main-title text-center m-3">
						Planets
					</h1>
					<div className="row justify-content-md-center">
						{store.resultPlanetsSearch.map(planet => (
							<React.Fragment key={planet.name}>
								<div className="card-deck">
									<div className="col-3 col-md-4 mb-4">
										<div className="card bg-light" style={{ width: "18rem" }}>
											<img
												className="card-img-top"
												src="https://via.placeholder.com/150x150"
												alt="Card image cap"
											/>
											<div className="card-body">
												<h3 className="card-title">{planet.name}</h3>
												<p className="card-text">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
													dictum mattis risus non rutrum. Fusce eget tempor ante. Duis mattis.
												</p>{" "}
												<Link to={`single/planets/${planet.id}`}>
													<button type="button" className="btn btn-primary">
														Learn More
													</button>
												</Link>
												<i
													className="fab fa-gratipay float-right"
													href="#"
													onClick={e => actions.addToFavourite(planet.name)}
												/>
											</div>
										</div>
									</div>
								</div>
							</React.Fragment>
						))}
					</div>
					<button
						className="btn btn-success"
						type="button"
						onClick={e => {
							console.log("clicked for nextPlanets: ", store.planetsNext);
							actions.getData("planets", store.planetsNext);
						}}>
						{"Show more results!"}
					</button>
				</div>
			</React.Fragment>
			<React.Fragment>
				<div className="container-fluid">
					<h1 id="Vehicles" className="main-title text-center m-3">
						Vehicles
					</h1>
					<div className="row justify-content-md-center">
						{store.resultVehiclesSearch.map(vehicle => (
							<React.Fragment key={vehicle.name}>
								<div className="card-deck">
									<div className="col-3 col-md-4 mb-4">
										<div className="card bg-light" style={{ width: "18rem" }}>
											<img
												className="card-img-top"
												src="https://via.placeholder.com/150x150"
												alt="Card image cap"
											/>
											<div className="card-body">
												<h3 className="card-title">{vehicle.name.split(" ")[0]}</h3>
												<p className="card-text">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
													dictum mattis risus non rutrum. Fusce eget tempor ante. Duis mattis.
												</p>
												<Link to={`single/vehicles/${vehicle.id}`}>
													<button type="button" className="btn btn-primary">
														Learn More
													</button>
												</Link>
												<i
													className="fab fa-gratipay float-right"
													href="#"
													onClick={e => actions.addToFavourite(vehicle.name)}
												/>
											</div>
										</div>
									</div>
								</div>
							</React.Fragment>
						))}
					</div>
					<button
						className="btn btn-success"
						type="button"
						onClick={e => {
							console.log("clicked for nextVehicles: ", store.vehiclesNext);
							actions.getData("vehicles", store.vehiclesNext);
						}}>
						{"Show more results!"}
					</button>
				</div>
			</React.Fragment>
		</div>
	);
};
export default Results;
