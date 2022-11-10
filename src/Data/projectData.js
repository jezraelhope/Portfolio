import nzmDemoImage from "./assets/dpEiCOw.jpeg";
import wsDashBoard from "./assets/yr8eW1K.jpeg";
import ylpAnime from "./assets/TcYfqpB.jpeg";
import kolorGame from "./assets/8ipjhjB.jpeg"

export const projectData = [
	{
		id: 1,
		name: "Kolor Game",
		mobileDemo: [kolorGame],
		liveLink: "https://jezraelhope.github.io/colorGame/",
		githubLink: "https://github.com/jezraelhope/colorGame",
		description:
			"Ready to guess which color matches the given RGB values? This game tests your RGB knowledge."
	},
	{
		id: 2,
		name: "NZM",
		mobileDemo: [nzmDemoImage],
		liveLink: "http://nzm.netlify.app",
		githubLink: "https://github.com/jezraelhope/ecomm",
		description:
			"Carefully curated pieces of clothing and accessories that embody elegance, cleanliness, timelessness and more importantly, sustainability. A used apparel store for someone who cares for the environment.",
	},
	{
		id: 2,
		name: "Wheel Strategy Dashboard",
		mobileDemo: [wsDashBoard],
		liveLink: "https://wheel-strategy-dashboard.onrender.com/",
		githubLink: "https://github.com/jezraelhope/bambya-dashboard",
		description:
			`The Wheel Strategy dashboard is created to display trades made using the options wheel strategy, aiming to easily show profits accrued monthly with the ability to add, edit, close, and delete trades.
			
			Technologies used: React, Node, Express, MongoDB, JavaScript, CSS, and HTML
			`
	},
	{
		id: 4,
		name: "Anime - Yelp Clone",
		mobileDemo: [ylpAnime],
		liveLink: "http://ylp-anime.herokuapp.com/",
		githubLink: "https://github.com/jezraelhope/yelp-anime",
		description:
			`A website created to display a user's favorite anime with the ability to filter according to genre, add, edit, and delete anime if the user is authenticated and also features a show page for anime details including the ability to post reviews, and upvote or downvote, again, if the user is authenticated.
			`
	}
];
