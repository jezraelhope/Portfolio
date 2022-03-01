import React from "react";

import "../Styles/skills.css";

import skillsData from "../Data/skillsData";

const Skills = () => {
	return (
		<div className="skills-and-tools-container">
			<div className="skills-and-tools">Skills and Tools</div>
			<div className="skills-container">
				{skillsData.map((item) => {
					return (
						<div className="skill" key={item.skill}>
							<img src={item.image} alt="item.skill" />
							<p className="name">{item.skill}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
