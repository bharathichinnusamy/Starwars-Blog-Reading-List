import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Peopledetails = props => {
	const value = useContext(Context);
	return (
		<div style={{ marginLeft: 30 + "rem" }}>
			<div className="card" style={{ width: 30 + "rem" }}>
				<img
					className="card-img-top"
					src="https://source.unsplash.com/collection/2081954/200x200"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h2 className="card-title">{value.store.peoplee[props.match.params.theid].name}</h2>
					<div className="card-text">
						{" "}
						<b>Height:</b>
						{value.store.peoplee[props.match.params.theid].height}
					</div>
					<div className="card-text">
						{" "}
						<b>Mass:</b> {value.store.peoplee[props.match.params.theid].mass}
					</div>
					<div className="card-text">
						<b>Hair_color:</b> {value.store.peoplee[props.match.params.theid].hair_color}
					</div>
					<div className="card-text">
						<b>Skin_color:</b> {value.store.peoplee[props.match.params.theid].skin_color}
					</div>
					<div className="card-text">
						<b>Eye_color:</b> {value.store.peoplee[props.match.params.theid].eye_color}
					</div>
					<div className="card-text">
						<b>Birth_year:</b>
						{value.store.peoplee[props.match.params.theid].birth_year}
					</div>
					<div className="card-text">
						<b>Gender:</b> {value.store.peoplee[props.match.params.theid].gender}
					</div>
					<div className="card-text">
						<b>Homeworld:</b> {value.store.peoplee[props.match.params.theid].homeworld}
					</div>
					<div className="card-text">
						<b>Films:</b>{" "}
						{value.store.peoplee[props.match.params.theid].films.map((item, index) => {
							return <div key={index}>{item}</div>;
						})}
					</div>
					<div className="card-text">
						<b>Species:</b> {value.store.peoplee[props.match.params.theid].species}
					</div>
					<div className="card-text">
						<b>Vehicles:</b>{" "}
						{value.store.peoplee[props.match.params.theid].vehicles.map((item, index) => {
							return <div key={index}>{item}</div>;
						})}
					</div>
					<div className="card-text">
						<b>Starships:</b>{" "}
						{value.store.peoplee[props.match.params.theid].starships.map((item, index) => {
							return <div key={index}>{item}</div>;
						})}
					</div>
					<div className="card-text">
						<b>Created:</b> {value.store.peoplee[props.match.params.theid].created}
					</div>
					<div className="card-text">
						<b>Edited:</b> {value.store.peoplee[props.match.params.theid].edited}
					</div>
					<div className="card-text">
						<b>URL:</b> {value.store.peoplee[props.match.params.theid].url}
					</div>
					<a href="/" className="btn btn-primary">
						go back home
					</a>
				</div>
			</div>
		</div>
	);
};
Peopledetails.propTypes = {
	match: PropTypes.object
};
