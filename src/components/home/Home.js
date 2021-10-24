import React from "react";
import "./Home.css";

const Home = ({ person }) => {
  return (
    <div id="home-container">
      <div className="background-layer"></div>

      <div className="i-am-section name-title">
        <div className="i-am">
          <div>
            Hi, It's{" "}
            {person.firstName + " " + person.middleName + " " + person.lastName}
          </div>
        </div>
      </div>
      <div className="i-am-section skill-title">
        <div className="i-am">
          <div>I'm {person.mainJobTitle}</div>
        </div>
      </div>
      <div className="download-cv">
        <a href={person.cvLink} target="_blank">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
