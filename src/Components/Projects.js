import React from "react";

import "../Styles/projects.css";

import { projectData } from "../Data/projectData";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-content">
        <h2 className="project-header">Fun Things I Made</h2>
        {projectData.map((item) => {
          return (
            <figure className="project-item" key={item.id}>
              <figcaption className="description">
                <h3 className="project-title">{item.name}</h3>
                <p className="project-description">{item.description}</p>
                <div>
                  {item.techUsed?.map((tech) => {
                    return (
                      <img
                        src={tech}
                        alt=""
                        className="tech-used-icon"
                        key={item.id}
                      />
                    );
                  })}
                </div>
                <div className="project-links">
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="live-link"
                  >
                    View It Here
                  </a>
                  <a href={item.githubLink} className="github-link">
                    View Github Repository
                  </a>
                </div>
                <div className="disclaimer">
                  <p>{item?.disclaimer}</p>
                </div>
              </figcaption>
              <img src={item.mobileDemo[0]} alt="demo" className="demo" />
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
