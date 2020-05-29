import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CardVehicles = () => {
	const { store, actions } = useContext(Context);
	//return (
	// <div className="text-center mt-5" style={{ width: "32%", position: "absolute", left: "34%" }}>
	// 	<table className="table table-bordered mt-2 pt-5">
	// 		<thead className="thead-dark">
	// 			<tr>
	// 				<th scope="col">Vehicles</th>
	// 			</tr>
	// 		</thead>
	// 		<tbody className="tbody-dark">
	// 			{store.planets.map((e, index) => (
	// 				<tr key={index}>
	// 					<td>{e.name}</td>
	// 				</tr>
	// 			))}
	// 		</tbody>
	// 	</table>
	// </div>
	return (
		<React.Fragment>
			<div className="row">
				{store.vehicles.map(vehicle => (
					<React.Fragment key={vehicle.id}>
						<div className="col-sm-3">
							<div className="card" style={{ width: "18rem;" }}>
								<img
									className="card-img-top"
									src="https://via.placeholder.com/150x150"
									alt="Card image cap"
								/>
								<div className="card-body">
									<h5 className="card-title">{vehicle.name}</h5>
									<p>{vehicle.model}</p>
									<p>{vehicle.manufacturer}</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
		</React.Fragment>
	);
};
export default CardVehicles;
