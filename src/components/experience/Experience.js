import React from "react";
import parse from "html-react-parser";
import "./Experience.css";

const Experience = ({ person }) => {
  return (
    <div id="experience">
      <div className="head-section">
        <h1>Experience</h1>
      </div>
      <div className="card-section">
        {person.workExperience.map((exp) => {
          return (
            <div className="card">
              <div className="card-column">
                <div className="card-row">
                  <div className="title-column">
                    <div className="title">{exp.title}</div>
                    <div className="date">
                      {exp.startMonth.slice(0, 3) +
                        " " +
                        exp.startYear +
                        " " +
                        " - " +
                        exp.endMonth.slice(0, 3) +
                        " " +
                        exp.endYear}
                    </div>
                  </div>
                  <div className="link">
                    <a href={exp.instituteWebsite}>{exp.institution}</a>
                  </div>
                </div>
                <div className="card-row">
                  <div>{parse(exp.details)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
