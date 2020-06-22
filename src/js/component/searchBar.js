import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const searchBar = () => {
	const { store, actions } = useContext(Context);
	const [card, setCard] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");
	const [filteredCard, setFilteredCard] = useState([]);
	return (
		<div className="container">
			<div className="row justify-content-center mt-4 mb-3">
				<div className="col-5">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Search here..." />
						<div className="input-group-append">
							<button className="btn btn-secondary" type="button">
								<i className="fa fa-search" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default searchBar;
