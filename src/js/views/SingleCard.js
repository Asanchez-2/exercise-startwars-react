import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

export const SingleCard = () => {
	const { store, actions } = useContext(Context);
	const match = useRouteMatch();
	const history = useHistory();
	const [editName, setName] = useState("");

	useEffect(() => {
		console.log("running useEffect");
		for (let contact of store.name) {
			console.log("checking > ", contact);
			if (contact.name == match.params.contactId) {
				console.log("found it!");
				setName(contact.name);
			}
		}
	}, []);

	return (
		<div className="card" style="width: 18rem;">
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{editName}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

SingleCard.propTypes = {};
