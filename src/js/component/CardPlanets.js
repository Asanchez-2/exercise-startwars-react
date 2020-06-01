import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CardPlanets = () => {
	const { store, actions } = useContext(Context);
	return (
		<React.Fragment>
			<div className="container-fluid">
				<h1 className="title text-center m-3">Planets</h1>
				<div className="row justify-content-md-center">
					{store.planets.map(planets => (
						<React.Fragment key={planets.name}>
							<div className="card-deck">
								<div className="col-3 col-md-4 mb-4">
									<div className="card bg-light" style={{ width: "18rem" }}>
										<img
											className="card-img-top"
											src="https://via.placeholder.com/150x150"
											alt="Card image cap"
										/>
										<div className="card-body">
											<h3 className="card-title">{planets.name}</h3>
											<p className="card-text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum
												mattis risus non rutrum. Fusce eget tempor ante. Duis mattis.
											</p>
											<a href="#" className="btn btn-primary">
												Learn More
											</a>
											<i className="fab fa-gratipay float-right" />
										</div>
									</div>
								</div>
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</React.Fragment>
	);
};
export default CardPlanets;
