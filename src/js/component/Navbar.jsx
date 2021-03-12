import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark">
			<span className="navbar-brand mb-0 h1 text-white">Navbar</span>
			<ul className="nav justify-content-end">
				<li className="nav-item">
					<a className="nav-link text-white" href="#">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-white" href="#">
						About
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-white" href="#">
						Services
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-white" href="#">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};
