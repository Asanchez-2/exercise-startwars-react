import React, { Component, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

export const Card = () => {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	const urls = [
		{
			name: "people",
			url: "https://swapi.dev/api/people/"
		},
		{
			name: "planets",
			url: "https://swapi.dev/api/planets/"
		},
		{
			name: "vehicles",
			url: "https://swapi.dev/api/vehicles/"
		}
	];
	useEffect(() => {
		async function fetchAll() {
			for (let url of urls) {
				let response = await fetch(url.url, {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				})
					.then(res => res.json())
					.then(resJson => resJson.results);
				if (url.name == "people") {
					setPeople(response);
				} else if (url.name == "planets") {
					setPlanets(response);
				} else {
					setVehicles(response);
				}
			}
		}
		fetchAll();
	}, []);
	return (
		<div className="container">
			{people.length > 0 && (
				<ul>
					{people.map((person, index) => {
						return <li key={index}>{person.name}</li>;
					})}
				</ul>
			)}
			<hr />
			{planets.length > 0 && (
				<ul>
					{planets.map((planet, index) => {
						return <li key={index}>{planet.name}</li>;
					})}
				</ul>
			)}
			<hr />
			{vehicles.length > 0 && (
				<ul>
					{vehicles.map((vehicle, index) => {
						return <li key={index}>{vehicle.name}</li>;
					})}
				</ul>
			)}
		</div>
	);
};
export default Card;
// Card.propTypes = {
//     type: PropTypes.string,
//
