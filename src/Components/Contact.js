import React from "react";

import hope from "../Data/assets/hope-square.jpg";
import ig from "../Data/assets/ig.svg";
import twitter from "../Data/assets/twitter.svg";
import pinterest from "../Data/assets/pinterest.svg";

import "../Styles/contact.css";

const Contact = () => {
	return (
		<div className="contact-container" id="contact">
			<div className="contact">
				<div className="lets-talk">Let's Talk!</div>
				<div className="contact-content">
					<form action="https://formsubmit.co/e51707a287b52fbe7105c13830891293" method="POST" className="contact-form">
						<div className="form-group">
							<label>Name</label>
							<input
								type="text"
								name="name"
								className="text-field"
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								name="name"
								className="text-field"
							/>
						</div>
						<div className="form-group">
							<label>Message</label>
							<textarea
								name="message"
								className="text-field"
								id="text-area"
							/>
						</div>		
						<button
							type="submit"
							value="Send Email"
							className="submit"
						>Submit</button>
					</form>
					<div className="me-and-socials">
						<img src={hope} alt="my_image" className="my-image" />
						<div className="socials-container">
							<a href="https://instagram.com/h0piii">
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
