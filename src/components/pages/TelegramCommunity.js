import React from "react";
import apple from "../Assets/apple.svg";
import andriod from "../Assets/android.svg";
import tele1 from "../Assets/tele1.svg";
import tele2 from "../Assets/tele2.svg";
import tele3 from "../Assets/tele3.svg";
import tele4 from "../Assets/tele4.svg";
import tele5 from "../Assets/tele5.svg";
import tele6 from "../Assets/tele6.svg";
import "./TelegramCommunity.css";

import { Col, Row } from "react-bootstrap";

const TelegramCommunity = () => {
  return (
    <div className="telegram">
      <div className="TelegramContainer">
        <Row className="tele-mem">
          <Col className="tele-members" lg={12} md={12} sm={12}>
            <img src={tele1} alt="" />
            <img src={tele2} alt="" />
            <img src={tele3} alt="" />
          </Col>
          <Col
            className="tele-members tele-member1 d-xs-none d-sm-none d-md-block d-lg-block"
            lg={12}
            md={12}
            sm={12}
          >
            <img src={tele4} alt="" />
            <img src={tele5} alt="" />
            <img src={tele6} alt="" />
          </Col>
        </Row>
        <div className="tele-div tele-mem-1'" lg={6} md={12} sm={12}>
          <div className="tele-txt">
            Join OVest Telegram Community for Updated Investment Tips
          </div>
          <button className="tele-btn">Join The Community</button>
          <div className="dashboard1-store-wrapper">
            <div className="dashboard1-store-innerwrapper dashboard1-btn-margin">
              <div className="dashboard1-img-wrapper">
                <img src={apple} alt="apple" />
              </div>
              <div>
                <div className="dashboard1-store-top-content">
                  Download on the
                </div>
                <div className="dashboard1-store-top-content2">App Store</div>
              </div>
            </div>
            <div className="dashboard1-store-innerwrapper">
              <div className="dashboard1-img-wrapper">
                <img src={andriod} alt="android" />
              </div>
              <div>
                <div className="dashboard1-store-top-content">Get on</div>
                <div className="dashboard1-store-top-content2">Play Store</div>
              </div>
            </div>
          </div>
          <div className="dashboard1-launching text-left mb-5">
            Launching soon......
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelegramCommunity;
