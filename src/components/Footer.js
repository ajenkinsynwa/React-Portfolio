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

          <FaGithub size={30} style={{ color:
          "#fff", marginRight: "1rem"}} />

          <FaTwitter size={30} style={{ color:
          "#fff", marginRight: "1rem"}} />

          <FaLinkedin size={30} style={{ color:
          "#fff", marginRight: "1rem"}} />
        

          </div>
        </div>
      </div>
    
  )
}

export default Footer