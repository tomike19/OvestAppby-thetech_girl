import React from "react";
import "./testimony.css";
import angela from "../Assets/angela.svg";
import ovest1 from "../Assets/ovest1.svg";
import ovest2 from "../Assets/ovest2.svg";
import ovest3 from "../Assets/ovest3.svg";
import ovest4 from "../Assets/ovest4.svg";
import ovest5 from "../Assets/ovest5.svg";

// import { Col, Row } from "react-bootstrap";

const Testimony = () => {
  return (
    <div className="testimony">
      <div className="testimony-center">
        <div className="testimony-center1" lg={6} md={12} sm={12}>
          <div className="testimony-img">
            <img className="angela" src={angela} alt="" />
            <div className="testimony-img-details">
              <p className="testimony-name">Angela Titilayo</p>
              <p className="testimony-name-pos">CEO Angela's Surge</p>
            </div>
          </div>
        </div>
        <div lg={6} md={12} sm={12} className="testi testimony-center1">
          <div className="testimony-text">
            <div className="header">
              Words From Our <span className=""> Ovestors</span>
            </div>
            <span className="avatar ">
              <img src={ovest1} alt="" />
              <img src={ovest2} alt="" />
              <img src={ovest3} alt="" />
              <img src={ovest4} alt="" />
              <img src={ovest5} alt="" />
            </span>

            <p className="testimonies">
              “Customer Service is prompt and efficient. Customer Service is
              prompt and efficient.”
            </p>
            <p className="tag   ">
              Happy OVestors <span>❤</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
