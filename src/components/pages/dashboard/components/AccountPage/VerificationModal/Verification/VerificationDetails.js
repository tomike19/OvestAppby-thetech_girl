import React from "react";
import Mark from "../../../../assets/mark.svg";
import Arrowright from "../../../../assets/Arrowright.svg";
import "./VerificationDetails.css";
import check from "../../../../assets/check.svg";

const VerificationDetails = ({ setSection }) => {
  return (
    <div className="verification">
      <h1>Verification</h1>
      <p className="verified-text">Verified information</p>
      <div
        className="verificationSection"
        onClick={() => {
          setSection(1);
        }}
        style={{
          marginTop: "30px",
        }}
      >
        <div className="verificationDetails">
          <div>
            <img src={Mark} alt="" />
          </div>
          <div>
            <p className="Details-text">Bank Details</p>
            {/* <p className="details-paragraph">Unverified</p> */}
            <p className="details-paragraph">verified</p>
          </div>
        </div>
        <div>
          {/* <img src={Arrowright} alt="" className="arrow-right" /> */}
          <img src={check} alt="" className="check-icon" />
        </div>
      </div>
      <div
        className="verificationSection "
        onClick={() => {
          setSection(2);
        }}
      >
        <div className="verificationDetails">
          <div>
            <img src={Mark} alt="" />
          </div>
          <div>
            <p className="Details-text">Means of Identification</p>
            {/* <p className="details-paragraph">Unverified</p> */}
            <p className="details-paragraph">verified</p>
          </div>
        </div>
        <div>
          {/* <img src={Arrowright} alt="" className="arrow-right" /> */}
          <img src={check} alt="" className="check-icon" />
        </div>
      </div>
      <div
        className="verificationSection"
        onClick={() => {
          setSection(3);
        }}
      >
        <div className="verificationDetails">
          <div>
            <img src={Mark} alt="" />
          </div>
          <div>
            <p className="Details-text">Proof or Residence</p>
            {/* <p className="details-paragraph">Unverified</p> */}
            <p className="details-paragraph">verified</p>
          </div>
        </div>
        <div>
          <img src={check} alt="" className="check-icon" />
          {/* <img src={Arrowright} alt="" className="arrow-right" /> */}
        </div>
      </div>
      <div className="verificationSection">
        <div className="verificationDetails">
          <div>
            <img src={Mark} alt="arrow" />
          </div>
          <div>
            <p className="Details-text">Email Address</p>
            {/* <p className="details-paragraph">Unverified</p> */}
            <p className="details-paragraph">verified</p>
          </div>
        </div>
        <div>
          {" "}
          {/* <img src={Arrowright} alt="arrow" className="arrow-right" /> */}
          <img src={check} alt="" className="check-icon" />
        </div>
      </div>
    </div>
  );
};

export default VerificationDetails;
