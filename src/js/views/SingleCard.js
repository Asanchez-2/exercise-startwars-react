import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
export const SingleCard = () => {
	const { store, actions } = useContext(Context);
	const match = useRouteMatch();
	const history = useHistory();
	const [editName, setName] = useState("");
	const [height, setHeight] = useState("");
	const [hairColor, setHairColor] = useState("");
	//const [editHeight, setHeight] = useState("");
	useEffect(
		() => {
			console.log("running useEffect");
			console.log(`THIS IS STORE PEOPLE: ${store.people} and ${store.people.length}`);
			for (let contact of store.people) {
				console.log("checking > ", contact.name);
				if (contact.name == match.params.contactId) {
					console.log("found it!");
					setName(contact.name);
					setHeight(contact.height);
					setHairColor(contact.hair_color);
					//setHeight(contact.height);
				}
			}
		},
		[store]
	);
	return (
		<div className="row justify-content-md-center">
			<div className="card-deck">
				<div className="col">
					<div className="card bg-light" style={{ width: "18rem" }}>
						<img className="card-img-top" src="https://via.placeholder.com/150x150" alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">
								Name:
								{editName}
							</h5>
							<p>
								Height:
								{height}
							</p>
							<p>
								Hair Color:
								{hairColor}
							</p>
							<Link to="/">
								<button href="#" className="btn btn-primary">
									Go home
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SingleCard.propTypes = {};
