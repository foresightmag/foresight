import '../css/Nav.css';
import React from 'react';
import logo from "../images/BLUE-FORESIGHT-LOGO.svg";
import instaicon from "../images/instagram.svg"
export default function()
{
    return (
        <div className="Nav" href='/'>
          <div className="nav-container">
            <nav className="nav">
              <a href=""><img className="nav-logo" src={logo} height="10px"/></a>
              <a href="">Global</a>
              <a href="">Student Interview</a>
              <a href="">Prof. Interview</a>
              <div className="issue-title">Issue 01 Women in STEM</div>
              <a href=""><img className="insta-icon" src={instaicon}/></a>
            </nav>
          </div>
        </div>
       );
}