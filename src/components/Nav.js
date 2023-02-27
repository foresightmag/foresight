import React from 'react';
import logo from "../images/BLACK-FORESIGHT-LOGO.png";
export default function()
{
    return (
        <div className='Nav' href='/'>
          <nav>
            <a href=""><img className="nav-logo" src={logo} height="10px"/></a>
            <a href="">Global</a>
            <a href="">Student Interview</a>
            <a href="">Prof. Interview</a>
            <div className="issue-title">Issue 01 Women in STEM</div>
          </nav>
        </div>
       );
}