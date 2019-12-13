import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const People = () => {
	const value = useContext(Context);
	return (
		<div className="text-center mt-5">
			<table className="table table-bordered mt-2 pt-5">
				<thead className="thead-dark">
					<tr>
						<th scope="col">People</th>
					</tr>
				</thead>
				<tbody className="tbody-dark">
					{value.store.peoplee.map((item, index) => (
						<tr key={index}>
							<td>
								<Link to={"/peopledetails/" + index}>{item.name}</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
