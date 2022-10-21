import "./ProjectsCard.css";

import React from 'react'
import pro1 from "../assets/queencitypups.png";
import { NavLink } from "react-router-dom";

function ProjectsCard() {
  return (
    <div className="work-container">
      <h1 className="project-heading"> Projects </h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="img" /> 
          <h2 className="project-title">Project Title</h2>
          <div className="pro-details">
            <p> This is Text</p>
            <div className="pro-btns">
              <NavLink to="https://evening-river-11733.herokuapp.com/"
              className="btn">View Project</NavLink>
              <NavLink to="https://github.com/tedtalktimmy/queen-city-pup"
              className="btn">Repository</NavLink>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard