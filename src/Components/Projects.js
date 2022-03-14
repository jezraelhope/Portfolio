import React from "react";

import "../Styles/projects.css";

import { projectData } from "../Data/projectData";

const Projects = () => {
	return (
		<div className="projects-container">
			<div className="projects">
				<h2 className="project-header">Fun Things I Made</h2>
				{projectData.map((item) => {
					return (
						<figure className="project-item" key={item.id}>
							<figcaption className="description">
								<h3 className="project-title">{item.name}</h3>
								<p className="project-description">
									{item.description}
								</p>
								<div className="project-links">
									<a
										href={item.liveLink}
										className="live-link"
									>
										View It Here
									</a>
									<a
										href={item.githubLink}
										className="github-link"
									>
										View Github Repository
									</a>
								</div>
							</figcaption>
							<div className="demo">
								<div className="image">
									<img
										src={item.mobileDemo[0]}
										alt="mobile-demo"
										className="mobile-demo"
									/>
								</div>
								<div className="buttons">
									<button>Desktop</button>
									<button>Mobile</button>
								</div>
							</div>
						</figure>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
