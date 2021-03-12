import React from "react";
//import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		<div
			className="jumbotron mx-auto w-100  mt-3"
			style={{ width: "18rem" }}>
			<h1 className="display-4">Welcomeee to my page!!</h1>
			<p className="lead">Any given content</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					See more
				</a>
			</p>
		</div>
	);
};

/*Jumbotron.PropTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonText: PropTypes.string
};*/
