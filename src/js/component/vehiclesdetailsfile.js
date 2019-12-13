import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Vehiclesdetails = props => {
	const value = useContext(Context);
	return (
		<div style={{ marginLeft: 30 + "rem" }}>
			<div className="card" style={{ width: 30 + "rem" }}>
				<img
					className="card-img-top"
					src="https://fb8b9801-fc0d-4748-b686-fcc4738b53d9.ws-us02.gitpod.io/files/download/?id=19af3871-5ae8-4fae-923f-92f80d89806e"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h2 className="card-title">{value.store.vehiclee[props.match.params.theid].name}</h2>
					<div className="card-text">
						{" "}
						<b>Model:</b>
						{value.store.vehiclee[props.match.params.theid].model}
					</div>
					<div className="card-text">
						{" "}
						<b>Manufacturer:</b> {value.store.vehiclee[props.match.params.theid].manufacturer}
					</div>
					<div className="card-text">
						<b>Cost_in_credits:</b> {value.store.vehiclee[props.match.params.theid].cost_in_credits}
					</div>
					<div className="card-text">
						<b>Length:</b> {value.store.vehiclee[props.match.params.theid].length}
					</div>
					<div className="card-text">
						<b>Max_atmosphering_speed:</b>{" "}
						{value.store.vehiclee[props.match.params.theid].max_atmosphering_speed}
					</div>
					<div className="card-text">
						<b>Crew:</b>
						{value.store.vehiclee[props.match.params.theid].crew}
					</div>
					<div className="card-text">
						<b>Passengers:</b> {value.store.vehiclee[props.match.params.theid].passengers}
					</div>
					<div className="card-text">
						<b>Cargo_capacity:</b> {value.store.vehiclee[props.match.params.theid].cargo_capacity}
					</div>
					<div className="card-text">
						<b>Consumables:</b> {value.store.vehiclee[props.match.params.theid].consumables}
					</div>
					<div className="card-text">
						<b>Vehicle_class:</b> {value.store.vehiclee[props.match.params.theid].vehicle_class}
					</div>
					<div className="card-text">
						<b>Films:</b>{" "}
						{value.store.vehiclee[props.match.params.theid].films.map((item, index) => {
							return <div key={index}>{item}</div>;
						})}
					</div>
					<div className="card-text">
						<b>Pilots:</b> {value.store.vehiclee[props.match.params.theid].pilots}
					</div>
					<div className="card-text">
						<b>Created:</b> {value.store.vehiclee[props.match.params.theid].created}
					</div>
					<div className="card-text">
						<b>Edited:</b> {value.store.vehiclee[props.match.params.theid].edited}
					</div>
					<div className="card-text">
						<b>URL:</b> {value.store.vehiclee[props.match.params.theid].url}
					</div>
					<a href="/" className="btn btn-primary">
						go back home
					</a>
				</div>
			</div>
		</div>
	);
};
Vehiclesdetails.propTypes = {
	match: PropTypes.object
};
