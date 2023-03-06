import '../css/Hero.css';
import React from 'react'
import logo from "../images/BLUE-FORESIGHT-LOGO.svg"
import placeholderimage from "../images/placeholder.jpeg"


export default function()
{
    return (
    <div className="hero-section">
      <div className="oval-cutout">
        <img src={logo} className="hero-logo" alt="logo"/>
        <img className="front-image"/>
      </div>
    </div>
    );   
}