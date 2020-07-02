import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Characters = () => {
	const { store, actions } = useContext(Context);
	const { active, setActive } = useState(false);
	const handleEvent = () => {
		if (store.people.lenght === 5) {
			setActive({ active: true });
		}
	};
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div>
					<div className="col text-center">
						<img
							className="img-responsive logo"
							src="https://i.blogs.es/69fdcc/star-wars-saga/1366_2000.jpg"
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
											<Link to={"/characters/" + person.name} className="btn btn-secondary">
												Learn More
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
export default Characters;
