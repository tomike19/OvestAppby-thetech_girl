import React from "react";
import "./AboutUs.css";
import aboutusImg from "../Assets/aboutus-img.png";
import Founder from "./Founder";
import Team from "./Team";
import mission from "../Assets/mission.svg";
import mission2 from "../Assets/misson2.svg";
import mission3 from "../Assets/misson3.svg";
import angel1 from "../Assets/angel1.png";
import TelegramCommunity from "./TelegramCommunity";
import mastercard from "../Assets/mastercard.png";
import Footer from "./footer";
import DefaultLayout from "../../layouts/DefaultLayout";

const AboutUs = () => {
  return (
    <>
      <DefaultLayout>
        <div>
          <div className="aboutus">
            <div className="aboutus__hero">
              <div className="aboutus__box">
                <span className="aboutus__badge">Why Invest With Us ?</span>
                <span className="aboutus__header--text">
                  Where Do We Invest Your Money!
                </span>
                <span className="aboutus__header--footer">
                  At OVest, we invest in the following businesses:
                </span>

                <img src={aboutusImg} alt="" className="aboutus--image" />
                <p className="aboutus__smallBusiness">Small Businesses</p>
                <p className="aboutus__realestate">
                  Real Estate Development and Management
                </p>
                <p className="aboutus__moneymarket">
                  Money Market (Forex and Crypto Manned by Professional Traders
                  )
                </p>
                <p className="aboutus__autos">
                  {" "}
                  Autos and other profitable investment opportunities offered by
                  the industry
                </p>
                <p className="aboutus__agric">Agriculture (Farming Business)</p>
              </div>
            </div>

            <div className="aboutus__hero-sub">
              <div className="aboutus__hero-sub-sess">
                <div className="mission">
                  <img src={mission} alt="" />
                  <span className="mission-header">Our Mission</span>
                  <span className="mission-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit,Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit,
                  </span>
                </div>
                <div className="mission">
                  <img src={mission2} alt="" />

                  <span className="mission-header">Our Mission</span>
                  <span className="mission-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit,Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit,
                  </span>
                </div>{" "}
                <div className="mission">
                  <img src={mission3} alt="" />

                  <span className="mission-header">Our Mission</span>
                  <span className="mission-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit,Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit,
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Founder />
          <Team />
          <div className="top-vestors">
            <div className="top-ovesters">
              <p className="aboutus__badge1 ">Top OVestors</p>
              <h2>OVest is growing. Grow with us.</h2>
            </div>
            <div className="topvestors-cards">
              <div className="topvestors-card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit,
                </p>
                <div className="card-f">
                  <img src={angel1} alt="" />
                  <div className="angel-detials">
                    <h4>OVestor Angel</h4>
                    <p>Ibadan , Nigeria</p>
                  </div>
                </div>
              </div>
              <div className="topvestors-card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit,
                </p>
                <div className="card-f">
                  <img src={angel1} alt="" />
                  <div className="angel-detials">
                    <h4>OVestor Angel</h4>
                    <p>Ibadan , Nigeria</p>
                  </div>
                </div>
              </div>
              <div className="topvestors-card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit,
                </p>
                <div className="card-f">
                  <img src={angel1} alt="" />
                  <div className="angel-detials">
                    <h4>OVestor Angel</h4>
                    <p>Ibadan , Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TelegramCommunity />

          <div className="payment-method">
            <h2 className="h2">FEATURED PAYMENT METHOD</h2>
            <div className="mastercard">
              <img src={mastercard} alt="" />
              <img src={mastercard} alt="" />
              <img src={mastercard} alt="" />
              <img src={mastercard} alt="" />
              <img src={mastercard} alt="" />
              <img src={mastercard} alt="" />
            </div>
          </div>
        </div>

        <Footer />
      </DefaultLayout>
    </>
  );
};

export default AboutUs;
