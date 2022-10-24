import "./FormStyles.css"

import React from 'react'

import {FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Form() {
  return (
    <div>
      <h1 className="text-Con">If you would like to contact me please click below.
      </h1>
        

        <div class="btn3">
        <a class="button" href="mailto:alexjenkinsynwa@gmail.com">Email Me</a>
        </div>
        <br>
        </br>

        <div class="btn3">
        <a class="button" href="https://docs.google.com/document/d/1Z0b7YPJlbuIAIUHUiyVru3XA9Z0M-aj7/edit?usp=sharing&ouid=106277222241718224992&rtpof=true&sd=true">My Resume</a>
        </div>

      <div className="contact-icons">
      <a href="https://github.com/ajenkinsynwa">
          <FaGithub size={50} style={{ color:
          "#fff", marginRight: "1rem"}}/> </a>

          <a href="https://twitter.com/alexjenkinsnas1/">
          <FaTwitter size={50} style={{ color:
          "#fff", marginRight: "1rem"}} /> </a>

          <a href="https://www.linkedin.com/in/alexjenkins85/">
          <FaLinkedin size={50} style={{ color:
          "#fff", marginRight: "1rem"}} /> </a>

   

      </div>
     

    </div>
  )
}

export default Form;