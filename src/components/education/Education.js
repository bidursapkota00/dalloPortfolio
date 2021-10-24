import React from "react";
import "./Education.css";
import RecipeReviewCard from "./Edu-card";

const Education = ({ person }) => {
  return (
    <div id="education">
      <div className="head-section">
        <h1>Education</h1>
      </div>
      <div className="edu">
        {person.education.map((edu) => {
          return (
            <div className="edu-card">
              <RecipeReviewCard edu={edu} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
