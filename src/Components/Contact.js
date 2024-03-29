import React from "react";

import hope from "../Data/assets/hope-square.jpg";

import "../Styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact">
        <p className="engagement">
          Want to collaborate, have a feedback on my portfolio, or just want to
          chat?
        </p>
        <div className="lets-talk">Let's Talk!</div>
        <div className="contact-content">
          <form
            action="https://formsubmit.co/e51707a287b52fbe7105c13830891293"
            method="POST"
            className="contact-form"
          >
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" className="text-field" />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="text-field"
              />
            </div>
            <div className="form-group">
              <label for="text-area">Message</label>
              <textarea name="message" className="text-field" id="text-area" />
            </div>
            <button
              type="submit"
              value="Send Email"
              className="submit"
              aria-label="submit form button"
            >
              Submit
            </button>
          </form>
          <div className="me-and-socials">
            <img
              src={hope}
              alt="a circle with my profile picture"
              className="my-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
