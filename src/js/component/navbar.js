import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="container navbar navbar-light bg-light mb-3">
			<span className="navbar-brand mb-0 h1">
				<img
					className="logoNav"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
				/>
			</span>
			<div className="dropdown">
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
		</nav>
	);
};
