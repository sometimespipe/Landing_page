import React from "react";
import { Navbar } from "./Navbar.jsx";
//import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";
import { Body } from "./Body.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//import { Jumbotron } from "./Jumbotron.jsx";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Body />
			<Footer />
		</div>
	);
}
