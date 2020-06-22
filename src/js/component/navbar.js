import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="container">
			<div className="row">
				<div className="navbar-brand col">
					<Link to="/">
						<img
							className="logoNav"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
						/>
					</Link>
				</div>
				<div className="navbar-brand col text-center mt-3">
					<a href="#Characters" className="title">
						Characters
					</a>
				</div>
				<div className="navbar-brand col text-center mt-3">
					<a href="#Planets" className="title">
						Planets
					</a>
				</div>
				<div className="navbar-brand col text-center mt-3">
					<a href="#Vehicles" className="title">
						Vehicles
					</a>
				</div>
				<div className="dropdown text-center col mt-3">
					<button
						className="btn btn-secondary dropdown-toggle p-2"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
						<span className="favoriteLenght ml-2 p-1">{store.favorites.length}</span>
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<>
							<ul className="list-group favoriteList m-2 p-2">
								{store.favorites.map((item, index) => {
									return (
										<li key={index} className="list-group-item d-flex" href="#">
											{item}{" "}
											<i
												onClick={() => actions.deleteFavourite(index)}
												className="far fa-trash-alt ml-auto"
											/>
										</li>
									);
								})}
							</ul>
						</>
					</div>
				</div>
			</div>
		</nav>
	);
};
