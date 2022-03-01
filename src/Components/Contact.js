import React from "react";

import hope from "../Data/assets/hope-square.jpg";
import ig from "../Data/assets/ig.svg";
import twitter from "../Data/assets/twitter.svg";
import pinterest from "../Data/assets/pinterest.svg";

import "../Styles/contact.css";

const Contact = () => {
	return (
		<div className="contact-container">
			<div className="contact">
				<div className="lets-talk">Let's Talk!</div>
				<div className="contact-content">
					<form action="#" className="contact-form">
						<input
							type="text"
							placeholder="Name"
							className="text-field"
						/>
						<input
							type="text"
							placeholder="Email Address"
							className="text-field"
						/>
						<textarea
							placeholder="Message"
							className="text-field"
							id="text-area"
						/>
						<input
							type="submit"
							value="Send Email"
							className="submit"
						/>
					</form>
					<div className="me-and-socials">
						<img src={hope} alt="my_image" className="my-image" />
						<div className="socials-container">
							<a href="instagram.com/h0piii">
								<img src={ig} alt="instagram" />
							</a>
							<a href="https://twitter.com/jezraelhope">
								<img src={twitter} alt="twitter" />
							</a>
							<a href="https://twitter.com/jezraelhope">
								<img src={pinterest} alt="pinterest" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
