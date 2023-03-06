import '../css/Nav.css';
import React from 'react';
import logo from "../images/BLUE-FORESIGHT-LOGO.svg";
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
            </nav>
          </div>
        </div>
       );
}