import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import CardPeople from "../component/CardPeople";
import CardVehicles from "../component/CardVehicles";
import CardPlanets from "../component/CardPlanets";

export const Home = () => (
	<div className="text-center mt-5">
		<CardPeople />
		<CardVehicles />
		<CardPlanets />
	</div>
);
