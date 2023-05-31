import "../css/Nav.css";
import React from "react";
import logo from "../images/BLUE-FORESIGHT-LOGO.svg";
import instaicon from "../images/instagram.svg";
import facebackIcon from "../images/facebook.svg";

export default function Nav() {
  return (
    <div className="Nav" href="/">
      <div className="nav-container">
        <nav className="nav">
          <a href="#Main">
            <img className="nav-logo" src={logo} height="10px" alt="logo" />
          </a>
          <a href="#jumpToGL">Global</a>
          <a href="#jumpToPI">Professor Interview</a>
          <a href="#jumpToSI">Student Interview</a>
          <div className="issue-title">Issue 01 Women in STEM</div>
          <a href="https://instagram.com/foresightmag/" target="popup" >
            <img className="insta-icon" src={instaicon} alt="logo" />
          </a>
        </nav>
      </div>


      <div className="NavMobile">

        <a href="#Main"><img className="ForesightMobileLogo" src={logo} alt="logo" /></a>

        <div className="contactList">
          <a href="/">+1 (480) 878-9827</a>
          <a href="/">foresightzine@outlook.com</a>
          <a href="/" id="logolink"><img id="socialLogo" src={facebackIcon} alt="logo" /></a>
          <a href="/" id="logolink"><img id="socialLogo" src={instaicon} alt="logo" /></a>   
        </div>

      </div>


    </div>
  );
}
