import "./NavbarStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className= "header" >
    <Link to="/">
      <h1>Alex Jenkins Portfolio</h1>
    </Link>
    <ul>
      <li>
        <link to="/">Home</link>
      </li>
      <li>
        <link to="/project">Project</link>
      </li>
      <li>
        <link to="/about">About</link>
      </li>
      <li>
        <link to="/contact">Contact</link>
      </li>
    </ul>
    </div> 
  )
}



export default Navbar 