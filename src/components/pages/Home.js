import React, { useEffect } from "react";
// import NavBar from "../Navbar";
// import Group from "../Assets/landingImg.png";
import secure from "../Assets/secure.svg";
import returns from "../Assets/returns.svg";
import support from "../Assets/support.svg";
import mark from "../Assets/mark.svg";
import lady from "../Assets/Ellipse-who.png";
import { Col, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import "../Button.css";
import BecomeOvestor from "./BecomeOvestor";
import Typewriter from "typewriter-effect";

import Testimony from "./Testimony";
import TelegramCommunity from "./TelegramCommunity";
import TextSlide from "./TextSlide";
import Footer from "./footer";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <NavBar /> */}
      <DefaultLayout>
        <div className="main-home">
          <div className="dashboard-container">
            <Row className="">
              <Col lg={6} md={12} sm={12}>
                <div className="dashboard1-wrapper">
                  <div>
                    <button className="badge">
                      <div>Think Richly</div>{" "}
                      <span
                        className="iconify dashboard1-arrow-icon"
                        data-icon="fe:arrow-right"
                        data-inline="false"
                      ></span>
                    </button>
                    <div className="dashboard1-top-content">
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter
                            .typeString(
                              "Invest and Grow Your Money With <span style=' color: #0768f6; border: 2px solid #fe8c01;   border-radius: 50%';>OVest</span>"
                            )
                            .pauseFor(2000)

                            .start();
                        }}
                      ></Typewriter>
                    </div>
                    <div className="dashboard1-main-content">
                      OVest is a registered and growing investment platform
                      managed by a team of experienced and competent
                      professionals in the finance and investment industry with
                      impressive interest rates. OVest is secure, trusted and
                      efficient.
                    </div>
                    <div className="ctA">
                      <a href="https://ovest.ng/login">
                        <button className="btn3">Login</button>
                      </a>
                      <a href="https://ovest.ng/register">
                        <button className="btn4">Start Investing Now</button>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="d-md-none d-lg-block" lg={6} md={12}>
                <div className="dashboard2-wrapper">
                  <img
                    className="eclipse1"
                    src="https://nebbix.netlify.app/static/media/addimage1.12591440.png"
                    alt="eclipse3"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <Row className="about-ses">
            <div className="title">
              <p data-aos="fade-left">
                Why Become an <span className="ovestor1">Ovestor</span>{" "}
              </p>
            </div>
            <div className="ovestor-why">
              <div className="ovestor-why-content">
                <img
                  data-aos="flip-left"
                  className="icon-img"
                  src={secure}
                  alt=""
                />
                <p className="ses-title">Secure Investment</p>
                <div className="ses-text">
                  We have equivalent amount of asset as the capital used in the
                  business of foreign exchange trading and other investment
                  opportunities offered by the industry (in case of rainy day).
                </div>
              </div>
              <div className="ovestor-why-content">
                <img
                  data-aos="flip-left"
                  className="icon-img"
                  src={returns}
                  alt=""
                />
                <p className="ses-title ">Great Returns</p>

                <div className="ses-text">
                  We are managed by a team of experienced and competent
                  professionals in the finance and investment industry, we offer
                  impressive interest rates, profitability is our watch word.
                </div>
              </div>
              <div className="ovestor-why-content">
                <img
                  data-aos="flip-left"
                  className="icon-img"
                  src={support}
                  alt=""
                />
                <p className="ses-title">Best Support</p>

                <div className="ses-text">
                  We offer one the best pre-service, on-service and post-service
                  support to all our investors, be rest assured that our
                  customer service team are always available to attend to your
                  enquiries.
                </div>
              </div>
            </div>
          </Row>
          <div className="who-we-bgImg">
            <div className="who-we-are">
              <div className="whoWeAre whoWeAre1">
                <div className="who-title">Who We Are</div>
                <p className="who-text1">
                  OVest.ng (OSource Vestment Ltd) is a product of OSource Empire
                  Ltd, a union of brands enriching lives and communities daily
                  and duly registered with CAC with RC Number: 1776455. OVest.ng
                  is managed by a team of experienced and competent
                  professionals in the finance and investment industry within
                  and outside the country to ensure optimum return.
                </p>
                <p className="who-text">
                  Both OVest.ng (OSource Vestment Ltd) are legal entities in
                  Nigeria. Our drive is to consistently be the platform that
                  enrich you financially and give returns to money invest by our
                  investors to earn you total financial liberation.
                </p>
                <div className="who-we-icon">
                  <p className="icon-item ">
                    <img src={mark} alt="" />
                    We Innovate
                  </p>
                  <p className="icon-item ">
                    <img src={mark} alt="" />
                    Licensed &#38; Certified
                  </p>
                  <p className="icon-item ">
                    <img src={mark} alt="" />
                    Saving &#38; Investments
                  </p>
                </div>
                <a href="https://ovest.ng/register">
                  <button className="btn5 mt-2">Start Investing Now</button>
                </a>
              </div>
              <div className="whoWeAre  whoWeAre2">
                <img
                  data-aos="zoom-in-up"
                  src={lady}
                  className="rounded-circle"
                  alt="lady"
                />
              </div>
            </div>
          </div>

          <BecomeOvestor />
          <Testimony />
          <TextSlide />
          <TelegramCommunity />
          <Footer />
        </div>
      </DefaultLayout>
    </>
  );
}
