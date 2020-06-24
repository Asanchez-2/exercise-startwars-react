import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const searchBar = () => {
	const { store, actions } = useContext(Context);
	const [word, setWord] = useState("");

	const handleChange = e => {
		setWord(e);
		console.log(word);
	};
	const handleSearch = e => {
		let peoples = store.people;
		let vehicles = store.vehicles;
		let planets = store.planets;
		let resultPeople = peoples.filter(people => people.name.toLowerCase().includes(word.toLowerCase()));
		let resultVehicles = vehicles.filter(vehicle => vehicle.name.toLowerCase().includes(word.toLowerCase()));
		let resultPlanets = planets.filter(planet => planet.name.toLowerCase().includes(word.toLowerCase()));
		actions.saveResults(resultPeople, resultPlanets, resultVehicles);
		console.log(resultPeople);
		console.log(resultVehicles);
		console.log(resultPlanets);
	};

	return (
		<div className="container">
			<div className="row justify-content-center mt-4 mb-3">
				<div className="col-5">
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							placeholder="Search here..."
							onChange={e => handleChange(e.target.value)}
						/>
						<div className="input-group-append">
							<Link to={`results/${word}`}>
								<button onClick={handleSearch} className="btn btn-secondary" type="button">
									<i className="fa fa-search" />
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default searchBar;
