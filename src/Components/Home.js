import React from "react";

import "../Styles/home.css";

const Home = () => {
	return (
		<div className="home-container">
			<div className="home">
				<div className="greetings">Hello!</div>
				{/* <p className="short-description">
				Short description. bla bla bla. I am also supposed to be
				passionate about something. Random giberish about myself, etc.
			</p> */}
				<div className="bottom">
					<nav className="home-links">
						<a href="https://github.com/jezraelhope">Github</a>

						<a href="https://www.linkedin.com/in/jezraelhope/">
							LinkedIn
						</a>

						<a href="#">Resume</a>
					</nav>
					<div className="name">
						<div className="first">Jezrael</div>
						<div className="middle">Hope</div>
						<div className="last">Magat</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
