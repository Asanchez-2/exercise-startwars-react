import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CardVehicles = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5" style={{ width: "32%", position: "absolute", left: "34%" }}>
			<table className="table table-bordered mt-2 pt-5">
				<thread className="thread-dark">
					<tr>
						<th scope="col">People</th>
					</tr>
				</thread>
				<tbody className="tbody-dark">
					{store.Vehicles.map((e, index) => (
						<tr key={index}>
							<td>{e.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default CardVehicles;
