import React from "react";

import "../Styles/footer.css";

const year = new Date().getFullYear();

const Footer = () => {
  return <footer>© Hope {year}</footer>;
};

export default Footer;
