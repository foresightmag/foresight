import '../css/Hero.css';
import React from 'react'
import logo from "../images/BLUE-FORESIGHT-LOGO.svg"


export default function Hero()
{
    return (
    <div id = "Main"className="hero-section">
      <div className="oval-cutout">
        <img src={logo} className="hero-logo" alt="logo"/>
      </div>
    </div>
    );   
}