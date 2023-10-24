import React from "react";

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <p className="projects">
        <a href="https://rtm713.github.io/WiningAndDining/">
          <button className="project">Wine & Dine</button>
        </a>
        <a href="https://job-huntr-e0fcb23b9575.herokuapp.com/">
          <button className="project">Job Huntr</button>
        </a>

        <button className="project-soon">More Coming Soon!</button>
      </p>
    </div>
  );
}

export default Projects;
