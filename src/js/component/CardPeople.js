import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";

const CardPeople = () => {
	const { store, actions } = useContext(Context);
	const { active, setActive } = useState(false);
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div>
					<div className="col text-center">
						<img
							className="img-responsive logo"
							src="http://i2.wp.com/bitcast-a-sm.bitgravity.com/slashfilm/wp/wp-content/images/sagaposter-v2011_titled.jpg"
						/>
					</div>
				</div>
				<h1 className="title text-center m-3">Characters</h1>
				<div className="row justify-content-md-center">
					{store.people.map(person => (
						<React.Fragment key={person.name}>
							<div className="card-deck">
								<div className="col-3 col-md-4 col-sm-1 mb-4">
									<div className="card bg-light" style={{ width: "18rem" }}>
										<img
											className="card-img-top"
											src="https://via.placeholder.com/150x150"
											alt="Card image cap"
										/>
										<div className="card-body">
											<h3 className="card-title">{person.name}</h3>
											<p className="card-text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum
												mattis risus non rutrum. Fusce eget tempor ante. Duis mattis.
											</p>
											<Link to={`SingleCard/${person.name}`}>
												<a href="#" className="btn btn-primary">
													Learn More
												</a>
											</Link>
											<i
												className="fab fa-gratipay float-right"
												href="#"
												onClick={e => actions.addToFavourite(person.name)}
											/>
										</div>
									</div>
								</div>
							</div>
						</React.Fragment>
					))}
				</div>
				<button
					className="btn btn-success"
					type="button"
					onClick={e => {
						console.log("clicked for nextPeople: ", store.peopleNext);
						actions.getData("people", store.peopleNext);
					}}>
					{"Show more results!"}
				</button>
			</div>
		</React.Fragment>
	);
};
export default CardPeople;
