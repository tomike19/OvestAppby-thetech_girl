import React from "react";
import "./team.css";
// import { Row, Col } from "react-bootstrap";
import team1 from "../Assets/team1.png";
import MainHeader from "./dashboard/components/main/main-header/MainHeader";
const Team = () => {
  return (
    <div className="team-session">
      <div className="team-session-header">
        <h2>Our Team</h2>
      </div>

      <div className=" team-image container">
        <div className="image-sec">
          <img src={team1} className="team-img" alt="" srcSet="" />
          <h3>Angela Titi</h3>
          <p>Engineering</p>
        </div>
        <div className="image-sec">
          <img src={team1} className="team-img" alt="" srcSet="" />
          <h3>Angela Titi</h3>
          <p>Engineering</p>
        </div>{" "}
        <div className="image-sec">
          <img src={team1} className="team-img" alt="" srcSet="" />
          <h3>Angela Titi</h3>
          <p>Engineering</p>
        </div>{" "}
        <div className="image-sec ">
          <img src={team1} className="team-img" alt="" srcSet="" />
          <h3>Angela Titi</h3>
          <p>Engineering</p>
        </div>{" "}
        <div className="image-sec">
          <img src={team1} className="team-img" alt="" srcSet="" />
          <h3>Angela Titi</h3>
          <p>Engineering</p>
        </div>{" "}
        <div className="image-sec ">
          <img src={team1} className="team-img" alt="" srcSet="" />
          <h3>Angela Titi</h3>
          <p>Engineering</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
