import "./HeroImg2Styles.css"

import React, { Component } from 'react'


//class component renders to projects pages 
class heroImg2 extends Component {
  render () {
    return (
      <div className="hero-img2">
      <div className="heading2">
        <h1> {this.props.heading} </h1>
        <p> {this.props.text} </p>
        
        </div>
      </div>
    );
    }
  }

  

export default heroImg2;