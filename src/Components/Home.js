import React from "react";

import "../Styles/home.css";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home">
        <div className="greetings">Hello!</div>

        <div className="bottom">
          <nav className="home-links">
            <a href="https://github.com/jezraelhope">Github</a>

            <a href="https://www.linkedin.com/in/jezraelhope/">LinkedIn</a>

            <a href="https://www.canva.com/design/DAFRYPdhgCA/kJeVaNI7uypa643u7rt4Gw/view?utm_content=DAFRYPdhgCA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
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
