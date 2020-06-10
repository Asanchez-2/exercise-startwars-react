import React, { useState, useEffect, useContext, useRef } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import CardPeople from "../component/CardPeople";
import CardVehicles from "../component/CardVehicles";
import CardPlanets from "../component/CardPlanets";
import { Context } from "../store/appContext";
import { Modal } from "../component/Modal";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<CardPeople />
			<CardVehicles />
			<CardPlanets />
			<Modal show={store.showModal} onClose={() => actions.showModalFalse()} />
		</div>
	);
};
