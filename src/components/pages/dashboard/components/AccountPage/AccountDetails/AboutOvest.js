import React from "react";
import "./AboutOvest.css";
import logo from "../../../assets/ovest logo.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";

const AboutOvest = () => {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1>About OVest</h1>
      </div>
      <div className="About-logo">
        <div className="about-logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="about-text">
        <h1>OVest Version 0.1.0</h1>
        <p
          style={{
            marginTop: "23px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud{" "}
        </p>
      </div>
      <div className="about-social">
        <p>Join the coversation on our social media handles</p>
        <div className="about-icon">
          <img src={facebook} alt="facebook" className="ml-3" />
          <img src={twitter} alt="twitter" className="social-icon" />
          <img src={instagram} alt="instagram" className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default AboutOvest;
