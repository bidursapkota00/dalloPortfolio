import React from "react";
import "./Skills.css";
import profile from "../../img/profile.jpeg";
import { Progress } from "antd";

const Skills = ({ person }) => {
  let skillTitle = "";
  let skillBar = [];
  let skills = [];
  person.skills.map((skill, index) => {
    if (index < person.skills.length / 2) {
      skillTitle += skill.name;
      if (index < person.skills.length / 2 - 1) {
        skillTitle += ", ";
      }
    } else {
      skillBar.push(skill);
    }
  });
  skills.push({ Profile: skillTitle });

  return (
    <div id="skills">
      <div className="head-section">
        <h1>Skills</h1>
      </div>
      <div className="skills-section">
        <div className="img">
          <img src={profile} alt="" />
        </div>

        <div className="skill-column">
          <div className="skill-row">
            <div className="left-section">Profile</div>
            <div className="right-section">{skillTitle}</div>
          </div>

          {skillBar.map((skill) => {
            return (
              <div className="skill-row">
                <div className="left-section">{skill.name}</div>
                <div className="right-section">
                  <Progress
                    percent={skill.percentage}
                    showInfo={false}
                    strokeWidth={24}
                    trailColor={"#F5D6AB"}
                    strokeColor={"#C66C49"}
                    strokeLinecap={"square"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
