import React, { useEffect } from "react";
import "./Becomeovestor.css";
import group10 from "../Assets/ovstr.png";
import no1 from "../Assets/no1.svg";
import no2 from "../Assets/no2.svg";
import no3 from "../Assets/n3.svg";
import { Col, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

const BecomeOvestor = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="ovestor">
      <div className="bOvestor">
        {/* <div className=" ovestor-tit">
          <p data-aos="fade-left">
            Become an OVestor in
            <span className="ovestor-tit-span"> Three Steps</span>
          </p>
        </div> */}
        <Row>
          <Col md={12} lg={6} sm={12} className="steps">
            {/* <div className="one-session"> */}
            <div className="one">
              <img
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="9000"
                className="number"
                src={no1}
                alt=""
              />
              <div className="one-details">
                <div className="one-title">Create an Account</div>
                <div className="one-text">
                  Sign up downloading OVest App on Google Play Store for Android
                  or App Store for iOS or use OVest Web App.
                </div>
              </div>
            </div>
            <div className="one">
              <img
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="0.2000"
                className="number"
                src={no2}
                alt=""
              />
              <div className="one-details">
                <div className="one-title">Fund Your Wallet</div>
                <div className="one-text">
                  Fund your OVest wallet by selecting your preferred payment
                  method.
                </div>
              </div>
            </div>
            <div className="one">
              <img
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="0.2000"
                className="number"
                src={no3}
                alt=""
              />
              <div className="one-details">
                <div className="one-title">Invest & Earn</div>
                <div className="one-text">
                  You’re ready to go, select your preferred investment plan and
                  watch your money grow.
                </div>
              </div>
            </div>
            {/* </div> */}
          </Col>
          <Col className="d-none d-lg-block" md={6} lg={6} sm={12}>
            <img data-aos="fade-up" className="group10" src={group10} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BecomeOvestor;
