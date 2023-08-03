import React from "react";
import Typed from "react-typed";

import "../Styles/home.css";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home">
        <Typed
          className="greetings"
          strings={[
            "Hello!",
            "Kamusta!",
            "Namaskar!",
            "こんにちは!",
            "'sup!",
            "Suilad!",
            "Valar Morghulis!",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
        <div className="bottom">
          <nav className="home-links">
            <a target="_blank" href="https://github.com/jezraelhope">
              Github
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/jezraelhope/">
              LinkedIn
            </a>
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
