import "./AboutSection.css"

import React from 'react'

import React1 from "../assets/profile.jpeg";

function AboutSection() {
  return (
    <div className="about">
      <div className="left">
        <h1> Hello, I am Alex Jenkins.</h1>
        <p>Web developer currently earning a certificate in Full Stack Development from UNC Charlotte Full Stack Coding Bootcamp in November 2022. I developed skills in JavaScript, CSS, React, responsive web design, and more. I have always had a passion for computers, technology, and web development. My previous hospitality management experience I gained communication, collaborative spirit , activate-listening, and problem solving skills that are essential to a web developer. As an innovative problem-solver passionate about developing apps, my current focus is on mobile-first design and development. I am always continuing my studies independently to learn more about iOS and Android development.</p>
     
      </div>
      <div className="right">
        <div className="img-container">

        </div>
        <div className="img-stack-top"></div>
        <img src={React1} className="img2" 
        alt="profileimage"/>
      </div>
    </div>
  )
}

export default AboutSection