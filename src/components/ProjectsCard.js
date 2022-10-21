import "./ProjectsCard.css";

import React from 'react'
import pro1 from "../assets/queencitypups.png";
import pro2 from "../assets/notetaker.png"
import pro3 from "../assets/weather.png"
import { NavLink } from "react-router-dom";

function ProjectsCard() {
  return (
    <div className="work-container">
      <h1 className="project-heading"> My Recent Projects </h1>
      <div className="project-container">
        <div className="project-card">
          <div>
          <img className="img"  src={pro1} alt="img" /> </div>
          <h2 className="project-title">Queen City Pups Group Project</h2>
          <div className="pro-details">
            <p> This is a real-world full-stack application that allows dog parents access to a databases of resources for their favorite pup in the Queen City. This website was created for dog parents in Charlotte, NC area. It gives dog parents the ability to set up play dates, locate stores and dog parks in the city.</p>
            <div className="pro-btns">
              <NavLink to="https://evening-river-11733.herokuapp.com/"
              className="btn">View Project</NavLink>
              <NavLink to="https://github.com/tedtalktimmy/queen-city-pup"
              className="btn">Repository</NavLink>
              </div>
          </div>
        </div>
        <div className="project-card">
          <div>
          <img className="img"  src={pro2} alt="img" /> </div>
          <h2 className="project-title">Note Taker</h2>
          <div className="pro-details">
            <p>When you are busy and need remember things how great would it be to have a simple quick note-taker application that stores simple daily notes. This note taker application is simple to use and will add and save your daily notes. For the developer this application is focusing on the backend by using Express.js. We also are using Node.js to create a server that will store the users notes on a local server.</p>
            <div className="pro-btns">
              <NavLink to="https://mighty-ocean-87757.herokuapp.com/"
              className="btn">View Project</NavLink>
              <NavLink to="https://github.com/ajenkinsynwa/express.js-notetaker"
              className="btn">Repository</NavLink>
              </div>
          </div>
        </div>
        <div className="project-card">
          <div>
          <img className="img"  src={pro3} alt="img" /> </div>
          <h2 className="project-title">Weather Dashboard</h2>
          <div className="pro-details">
            <p> It is important to always check the weather to know what mother nature has in store for the current day and next 5 days. It is also important if you are going on a vacation to know the weather of your destination, that way you can prepare accordingly. This simple weather dashboard can show you the 5 day forecast of your city of choice, max/min temeperature, humidity, and wind speed.</p>
            <div className="pro-btns">
              <NavLink to="https://ajenkinsynwa.github.io/weatherdashboard/"
              className="btn">View Project</NavLink>
              <NavLink to="https://github.com/ajenkinsynwa/weatherdashboard"
              className="btn">Repository</NavLink>
              </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default ProjectsCard