import '../css/Nav.css';
import React from 'react';
import logo from "../images/BLUE-FORESIGHT-LOGO.svg";
import instaicon from "../images/instagram.svg"

export default function Nav()
{
    return (
        <div className="Nav" href='/'>
          <div className="nav-container">
            <nav className="nav">
              <a href="#Main"><img className="nav-logo" src={logo} height="10px" alt="logo"/></a>
              <a href="#jumpToGL">Global</a>
              <a href="#jumpToSI">Student Interview</a>
              <a href="#jumpToPI">Prof. Interview</a>
              <div className="issue-title">Issue 01 Women in STEM</div>
              <a href="/"><img className="insta-icon" src={instaicon} alt="logo"/></a>
            </nav>
          </div>
        </div>
       );
}