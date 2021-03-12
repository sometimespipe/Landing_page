import React from "react";

export const Footer = () => {
	return (
		<footer
			className="text-center p-3"
			style={{ background: "rgba(0, 0, 0, 0.2);" }}>
			© 2021 Copyright: &nbsp;
			<a
				className="text-dark"
				target="_blank"
				href="https://github.com/sometimespipe"
				rel="noreferrer">
				Sometimespipe
			</a>
		</footer>
	);
};
