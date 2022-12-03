import React from "react";

import "../Styles/skills.css";

import skillsData from "../Data/skillsData";

const Skills = () => {
	return (
		<div className="skills-and-tools-container" id="skills">
			<h2 className="skills-and-tools">Skills and Tools</h2>
			<div className="skills-container">
				{skillsData.map((item) => {
					return (
						<div className="skill" key={item.skill}>
							<img src={item.image} alt={item.skill} className="skill-icon"/>
							<p className="skill-name">{item.skill}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
