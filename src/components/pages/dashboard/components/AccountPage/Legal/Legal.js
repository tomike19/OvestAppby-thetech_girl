import React from "react";
import "./Legal.css";
import Terms from "../../../assets/terms.svg";
import faq from "../../../assets/Faqs.svg";
import arrowright from "../../../assets/Arrowright.svg";

const Legal = ({ setSection }) => {
  return (
    <div className="legal-section">
      <p className="legal-text">Legal</p>
      <a href="#legalModal">
        <div
          className="legal"
          onClick={() => {
            setSection(1);
          }}
        >
          <div className="legal-page">
            <div className="legalTerms">
              <img src={Terms} alt="terms" className="terms-image" />
              <p>Terms & Conditions</p>
            </div>
            <img src={arrowright} alt="arrowright" className="legal-arrow" />
          </div>
        </div>
      </a>
      <a href="#legalModal">
        <div
          className="legal-two"
          onClick={() => {
            setSection(2);
          }}
        >
          <div className="legal-page">
            <div className="legalTerms">
              <img src={faq} alt="terms" className="terms-image" />
              <p>FAQs</p>
            </div>
            <img src={arrowright} alt="arrowright" className="legal-arrow" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Legal;
