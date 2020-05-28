import React, { Component } from "react";
import PropTypes from "prop-types";

export class CardVehicle extends Component {
	render() {
		const name = this.props.name;
		const model = this.props.model;
		const length = this.props.length;
		const passengers = this.props.passengers;
		const maxAtmospheringSpeed = this.props.maxAtmospheringSpeed;
		const manufacturer = this.props.manufacturer;

		return (
			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img className="card-img-top" src="http://placehold.it/500x325" alt="" />
					<div className="card-body">
						<h4 className="card-title">{name}</h4>
						<ul style="list-style-type:none;">
							<li>Model: {model}</li>
							<li>Length: {length}</li>
							<li>Passengers: {passengers}</li>
							<li>Max Atmosphering Speed: {maxAtmospheringSpeed}</li>
							<li>Manufacturer: {manufacturer}</li>
						</ul>
					</div>
					<div className="card-footer">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
		);
	}
}

CardVehicle.propTypes = {
	name: PropTypes.string,
	model: PropTypes.string,
	length: PropTypes.string,
	passengers: PropTypes.string,
	maxAtmospheringSpeed: PropTypes.string,
	manufacturer: PropTypes.string
};
