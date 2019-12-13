import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Planetsdetails = props => {
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
					<h2 className="card-title">{value.store.planetss[props.match.params.theid].name}</h2>
					<div className="card-text">
						{" "}
						<b>Rotation_period:</b>
						{value.store.planetss[props.match.params.theid].rotation_period}
					</div>
					<div className="card-text">
						{" "}
						<b>Orbital_period:</b> {value.store.planetss[props.match.params.theid].orbital_period}
					</div>
					<div className="card-text">
						<b>Diameter:</b> {value.store.planetss[props.match.params.theid].diameter}
					</div>
					<div className="card-text">
						<b>Climate:</b> {value.store.planetss[props.match.params.theid].climate}
					</div>
					<div className="card-text">
						<b>Gravity:</b> {value.store.planetss[props.match.params.theid].gravity}
					</div>
					<div className="card-text">
						<b>Terrain:</b>
						{value.store.planetss[props.match.params.theid].terrain}
					</div>
					<div className="card-text">
						<b>Surface_water:</b> {value.store.planetss[props.match.params.theid].surface_water}
					</div>
					<div className="card-text">
						<b>Population:</b> {value.store.planetss[props.match.params.theid].population}
					</div>
					<div className="card-text">
						<b>Residents:</b>{" "}
						{value.store.planetss[props.match.params.theid].residents.map((item, index) => {
							return <div key={index}>{item}</div>;
						})}
					</div>
					<div className="card-text">
						<b>Films:</b> {value.store.planetss[props.match.params.theid].films}
					</div>
					<div className="card-text">
						<b>Created:</b> {value.store.planetss[props.match.params.theid].created}
					</div>
					<div className="card-text">
						<b>Edited:</b> {value.store.planetss[props.match.params.theid].edited}
					</div>
					<div className="card-text">
						<b>URL:</b> {value.store.planetss[props.match.params.theid].url}
					</div>
					<a href="/" className="btn btn-primary">
						go back home
					</a>
				</div>
			</div>
		</div>
	);
};
Planetsdetails.propTypes = {
	match: PropTypes.object
};
