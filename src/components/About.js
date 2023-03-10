import "../css/About.css";
import React from "react";
import placeholderimage from "../images/placeholder.jpeg";
import vector from "../images/Vector.svg";

export default function About() {
  return (
    <div className="about">
      <div className="about-text">
        <h1 className="about-title">About the mag!</h1>
        <p className="about-content">
          Thirdly, women in STEM can serve as role models and inspire future
          generations. Young girls need to see that women can succeed in
          traditionally male-dominated fields. By showcasing successful women in
          STEM, we can encourage young girls to pursue their dreams and break
          down gender stereotypes.<br></br>
          <br></br> Lastly, women in STEM can help to solve some of the world's
          most pressing issues. From climate change to global health, STEM has a
          significant role to play in finding solutions to these problems. By
          including more women in STEM, we can ensure that diverse perspectives
          are brought to the table, which can lead to more effective and
          innovative solutions. In conclusion, the concept of women in STEM is
          more important than ever before. By breaking down barriers and
          encouraging more women to pursue STEM careers, we can drive progress,
          promote innovation, and create a more equitable society. The future is
          bright for women in STEM, and it's up to us to ensure that they have
          the support and resources they need to succeed.
        </p>
      </div>

      <div className="about-image-container">
        <img
          src={placeholderimage}
          className="about-image"
          width="500px"
          alt="Logo"
        />
      </div>

      <div className="aboutMobile">
        <p className="fontAbout">About The Mag!</p>
        <p>
          Each issue will feature a student and experienced professional from
          diverse backgrounds and career paths. Foresight indents to strengthen
          your understanding of your career and equip a generation passionate
          and willing to inspire change.
        </p>
      </div>
      <img id="vector" src={vector} alt="logo" />
    </div>
  );
}
