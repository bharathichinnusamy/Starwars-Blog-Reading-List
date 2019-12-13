import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import React from "react";
import { Planets } from "../component/Planets";
import { People } from "../component/People";
import { Vehicles } from "../component/Vehicles";

export const Home = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<Planets />
					</div>
					<div className="col-sm">
						<People />
					</div>
					<div className="col-sm">
						<Vehicles />
					</div>
				</div>
			</div>
		</div>
	);
};
