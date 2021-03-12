import React from "react";
import { Card } from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";

export function Body() {
	return (
		<div className="container mt-3">
			<Jumbotron />
			<Card />
		</div>
	);
}
