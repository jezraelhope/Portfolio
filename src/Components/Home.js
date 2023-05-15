import React from "react";

import "../Styles/home.css";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home">
        <h1 className="greetings">Hello!</h1>

        <div className="bottom">
          <nav className="home-links">
            <a target="_blank" href="https://github.com/jezraelhope">
              Github
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/jezraelhope/">
              LinkedIn
            </a>

            <a
              target="_blank"
              href="https://drive.google.com/file/d/1_40QDwPgzkPCrxDupQJodvfkgHlC43yK/view?usp=sharing"
            >
              Resume
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
