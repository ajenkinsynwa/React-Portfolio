import "./FooterStyles.css"

import React from 'react'

import {FaGithub,  FaLinkedin, FaTwitter } from "react-icons/fa";



function Footer() {
  return (
    <div class="footer">
      <div className="footer-container">
        <div className="left"></div>
      </div>
         <div className="right">
          <h4> Social Media Links </h4>
          <p> Links to social media </p>
          <div className="social">

          <a href="https://github.com/ajenkinsynwa">
          <FaGithub size={30} style={{ color:
          "#fff", marginRight: "1rem"}}/> </a>

          <a href="https://twitter.com/alexjenkinsnas1/">
          <FaTwitter size={30} style={{ color:
          "#fff", marginRight: "1rem"}} /> </a>

          <a href="https://www.linkedin.com/in/alexjenkins85/">
          <FaLinkedin size={30} style={{ color:
          "#fff", marginRight: "1rem"}} /> </a>
        

          </div>
        </div>
      </div>
    
  )
}

export default Footer