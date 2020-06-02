import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<span className="navbar-brand mb-0 h1">
				<img
					className="logoNav"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
				/>
			</span>
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<>
						<ul>
							{store.favorites.map((item, index) => {
								return (
									<li key={index} className="dropdown-item" href="#">
										{item}{" "}
										<button
											onClick={() => actions.deleteFav(index)}
											className="float-right  btn btn-danger">
											X
										</button>
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
