import React, { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
export const SingleCard = () => {
	const { store, actions } = useContext(Context);
	const match = useRouteMatch();
	const history = useHistory();
	const [firstAttr, setFirstAttr] = useState({});
	const [secondAttr, setSecondAttr] = useState({});
	const [thirdAttr, setThirdAttr] = useState({});
	const loadReady = useRef(false);
	//const [editHeight, setHeight] = useState("");
	useEffect(
		() => {
			if (!store.single || store.single.id != match.params.id) {
				actions.singleCard(match.params.resource, match.params.id);
			} else {
				setFirstAttr({ name: "Name", value: store.single.name });
				if (match.params.resource == "people") {
					setSecondAttr({ name: "Height", value: store.single.height });
					setThirdAttr({ name: "Hair", value: store.single.hair_color });
				} else if (match.params.resource == "vehicles") {
					setSecondAttr({ name: "Passengers", value: store.single.passengers });
					setThirdAttr({ name: "Crew", value: store.single.crew });
				} else if (match.params.resource == "planets") {
					setSecondAttr({ name: "Climate", value: store.single.climate });
					setThirdAttr({ name: "Population", value: store.single.population });
				}
				loadReady.current = true;
			}
		},
		[store.single]
	);
	return (
		<div className="row justify-content-md-center">
			<div className="card-deck">
				<div className="col">
					{loadReady.current == true ? (
						<div className="card bg-light" style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src="https://via.placeholder.com/150x150"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">{`${firstAttr.name}:`}</h5>
								<p>{firstAttr.value}</p>
								<h5 className="card-title">{`${secondAttr.name}:`}</h5>
								<p>{secondAttr.value}</p>
								<h5 className="card-title">{`${thirdAttr.name}:`}</h5>
								<p>{thirdAttr.value}</p>
								<Link to="/">
									<button href="#" className="btn btn-primary">
										Go home
									</button>
								</Link>
							</div>
						</div>
					) : (
						<h2 className="text-white">{"Please wait..."}</h2>
					)}
				</div>
			</div>
		</div>
	);
};
SingleCard.propTypes = {};
