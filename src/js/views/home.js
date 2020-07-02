import React from "react";
import "../../styles/home.scss";
import Characters from "../component/characters";
import Vehicles from "../component/vehicles";
import Planets from "../component/planets";

export const Home = () => (
	<div className="text-center mt-5">
		<Characters />
		<Vehicles />
		<Planets />
	</div>
);
