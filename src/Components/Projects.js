import React from "react";

import "../Styles/projects.css";

import { projectData } from "../Data/projectData";

const Projects = () => {
	return (
		<div className="projects-container">
			<div className="projects">
				<div className="project-header">Fun Things I Made</div>
				{projectData.map((item) => {
					return (
						<div className="project-item" key={item.id}>
							<div className="demo">
								<img
									src={item.mobileDemo[0]}
									alt="mobile-demo"
									className="mobile-demo"
								/>
								<div className="buttons">
									<button>Desktop</button>
									<button>Mobile</button>
								</div>
							</div>
							<div className="description">
								<div className="project-title">{item.name}</div>
								<div className="project-description">
									{item.description}
								</div>
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
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
