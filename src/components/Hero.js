import '../css/Hero.css';
import React from 'react'
import logo from "../images/BLUE-FORESIGHT-LOGO.svg"


export default function Hero()
{
    return (
    <div className="hero-section">
      <div className="oval-cutout">
        <img src={logo} className="hero-logo" alt="logo"/>
        <img className="front-image" alt= "logo1"/>
      </div>
    </div>
    );   
}