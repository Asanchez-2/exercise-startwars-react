import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const CardPeople = () => {
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
export default CardPeople;
