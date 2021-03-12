import React from "react";

/*const cardContent = [
	{
		header: "primero",
		body: "ajsdhñaLSHJD",
		buttonLink: "#",
		buttonName: "botón 1",
		imageURL: "#"
	},
	{
		header: "segundo",
		body: "ajsdhñaLSHJD",
		buttonLink: "#",
		buttonName: "botón 2",
		imageURL: "#"
	},
	{
		header: "tercero",
		body: "ajsdhñaLSHJD",
		buttonLink: "#",
		buttonName: "botón 3",
		imageURL: "#"
	},
	{
		header: "cuarto",
		body: "ajsdhñaLSHJD",
		buttonLink: "#",
		buttonName: "botón 4",
		imageURL: "#"
	}
];

const cardsInHTML = cardContent.map((elemento, i) => {



});*/

export const Card = () => {
	const cardTitles = ["primero", "segundo", "tercero", "cuarto"];

	const cardCarousel = cardTitles.map(function(cards, index) {
		return (
			<div
				key={index}
				className="card-deck mh-100 mx-auto"
				style={{ width: "18rem" }}>
				<div className="card">
					<img
						className="card-img-top"
						src="{header.index}"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title text-center">
							{cardTitles[index]}
						</h5>
						<p className="card-text text-center">
							Any given content
						</p>
					</div>
					<div className="card-footer text-center">
						<small className="text-muted">
							<button
								type="button"
								className="btn btn-primary"
								href="{props.buttonLink}">
								Find out more!
							</button>
						</small>
					</div>
				</div>
			</div>
		);
	});

	return <div className="d-flex justify-content-around">{cardCarousel}</div>;
};

/*Card.PropTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonName: PropTypes.string,
    imageURL: PropTypes.string,
}*/
