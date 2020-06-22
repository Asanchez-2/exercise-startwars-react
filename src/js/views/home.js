import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import CardPeople from "../component/CardPeople";
import CardVehicles from "../component/CardVehicles";
import CardPlanets from "../component/CardPlanets";

export const Home = () => (
	<div className="text-center mt-5">
		<div>
			<img
				className="mainLogo"
				src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d2f3d93-e8b3-4e6d-bc04-80d1b99db218/d97g7bt-8fabadb3-b940-48b7-a612-00c4bec89ddd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNGQyZjNkOTMtZThiMy00ZTZkLWJjMDQtODBkMWI5OWRiMjE4XC9kOTdnN2J0LThmYWJhZGIzLWI5NDAtNDhiNy1hNjEyLTAwYzRiZWM4OWRkZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Zz2vrPSjOIomx3zIY7QfQdTYUuFmfpfmyBVZjsskVFI"
			/>
		</div>
		<CardPeople />
		<CardVehicles />
		<CardPlanets />
	</div>
);
