import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Character = props => {
	const { store } = useContext(Context);
	const peoplename = props.match.params.character;
	return (
		<>
			<div className="container">
				<div className="card-group">
					<div className="row">
						{!!store.people ? (
							store.people.map((character, i) => {
								if (JSON.stringify(character.name) === JSON.stringify(peoplename)) {
									return (
										<div
											className="row card-group text-white bg-dark mb-3 d-flex justify-content-center"
											key={i}>
											<div className="col-3 my-auto">
												<img
													src="https://via.placeholder.com/200x400"
													className="card-img-top"
													alt={"image of "}
												/>
												<Link
													to={"/characters"}
													className="btn btn-secondary d-flex justify-content-center">
													Back to Characters!
												</Link>
											</div>
											<div className="col-9 py-4">
												<h5 className="card-title">{character.name}</h5>
												<p className="card-text">Birth Year: {character.birth_year}</p>
												<p className="card-text">Gender: {character.gender}</p>
												<p className="card-text">hair_color: {character.hair_color}</p>
												<p className="card-text">height: {character.height}</p>
												<p className="card-text">mass: {character.mass}</p>
												<p className="card-text">skin_color: {character.skin_color}</p>
												<p className="card-text">created: {character.created}</p>
												<p className="card-text">edited: {character.edited}</p>
												<p className="card-text">
													Observations: Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et dolore magna
													aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
													laboris nisi ut aliquip ex ea commodo consequat.
												</p>
											</div>
										</div>
									);
								}
							})
						) : (
							<div className="text-center" id="undefined">
								<div className="spinner-grow text-light" role="status">
									Hola
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export default Character;
