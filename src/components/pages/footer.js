import React from "react";
import "./footer.css";
import logo from "../Assets/Vector.svg";
import Facebook from "../Assets/facebook.svg";
import Twitter from "../Assets/twitter.svg";
import Instagram from "../Assets/Instagram.svg";
import LinkedIn from "../Assets/LinkedIn.svg";
import whatsap from "../Assets/whatsap.svg";
import youtube from "../Assets/youtube.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="containe">
        <div className="footer-rapper">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="" />
              <p>OVest</p>
            </div>
            <p className="">
              OVest is here to help you achieve security, build wealth and
              realise your financial dreams. You can save, invest and earn more
              money.
            </p>
            <div className="socials">
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={Instagram} alt="" />
              <img src={LinkedIn} alt="" />
              <img src={whatsap} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
          <div className="footer-col">
            <h2>Company</h2>
            <ul>
              <li> About Us</li>
              <li>Become an Agents</li>
              <li>Privacy</li>
              <li>Terms & MoU</li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>Quick Links</h2>
            <ul>
              <li>FAQ</li>
              <li>Testimonials</li>
              <li>Investment Plans</li>
              <li>Security</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>Contact</h2>
            <ul>
              {" "}
              <li class="">support@ovest.ng</li>
              <li className="">+2348060831576</li>
              <p>
                1. Majaro Street, Ajibade Bus Stop, Coca-diva Area, Mokola,
                Ibadan, Nigeria.
              </p>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <hr />
          <p>
            OVest is an entity of OSource Vestment Ltd. A company duly
            registered with CAC with RC number 1776455. OVest.ng is managed by a
            team of experienced and competent professionals in the finance,
            investment and money market across the world to ensure optimum
            return.
          </p>
          <p className="footer-p2">
            Our drive is to consistently be the platform that enrich financially
            and consistently deliver quality returns to our OVestors in the bid
            to earn total financial liberation.{" "}
          </p>
        </div>
        <div className="mt-2 footer-copy-right">
          <p>© OSource Empire · Copyright 2021 · All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
