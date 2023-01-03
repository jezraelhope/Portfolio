import nzmDemoImage from "./assets/dpEiCOw.jpeg";
import wsDashBoard from "./assets/yr8eW1K.jpeg";
import ylpAnime from "./assets/TcYfqpB.jpeg";
import kolorGame from "./assets/8ipjhjB.jpeg";

import html from "./assets/html.svg";
import css3 from "./assets/css3.svg";
import javaScript from "./assets/javascript.svg";
import react from "./assets/react.svg";
import nodejs from "./assets/nodejs.svg";
import express from "./assets/express.svg";
import ejs from "./assets/ejs.svg";
import mongodb from "./assets/mongodb.svg";
import mongoose from "./assets/mongoose.svg";
import bootstrap from "./assets/bootstrap.svg";

export const projectData = [
  {
    id: 2,
    name: "NZM",
    mobileDemo: [nzmDemoImage],
    techUsed: [react, css3, javaScript],
    liveLink: "http://nzm.netlify.app",
    githubLink: "https://github.com/jezraelhope/ecomm",
    description:
      "Carefully curated pieces of clothing and accessories that embody elegance, cleanliness, timelessness and more importantly, sustainability. A used apparel store for someone who cares for the environment.",
  },
  {
    id: 3,
    name: "Wheel Strategy Dashboard",
    mobileDemo: [wsDashBoard],
    techUsed: [css3, react, javaScript, nodejs, express, mongoose, mongodb],
    liveLink: "https://wheel-strategy-dashboard.onrender.com/",
    githubLink: "https://github.com/jezraelhope/bambya-dashboard",
    description: `The Wheel Strategy dashboard is created to display trades made using the options wheel strategy, aiming to easily show profits accrued monthly with the ability to add, edit, close, and delete trades.
			`,
    disclaimer: "*please allow a few seconds for the webpage to load",
  },
  {
    id: 4,
    name: "Anime - Yelp Clone",
    mobileDemo: [ylpAnime],
    techUsed: [ejs, nodejs, express, mongodb, mongoose, bootstrap],
    liveLink: "https://yanime.onrender.com/",
    githubLink: "https://github.com/jezraelhope/yelp-anime",
    description: `A website created to display a user's favorite anime with the ability to filter according to genre, add, edit, and delete anime if the user is authenticated and also features a show page for anime details including the ability to post reviews, and upvote or downvote, again, if the user is authenticated.
			`,
    disclaimer: "*please allow a few seconds for the webpage to load",
  },
];
