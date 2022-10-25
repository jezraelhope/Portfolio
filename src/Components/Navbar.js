import React from "react";

import "../Styles/banner.css";

const Navbar = () => {
	return (
		<div className="banner-container">
			<nav className="banner">
				<a href="#home">Home</a>
				<a href="#projects">Projects</a>
				<a href="#skills">Skills</a>
				<a href="#contact">Contact</a>
			</nav>
		</div>
	);
};

export default Navbar;
