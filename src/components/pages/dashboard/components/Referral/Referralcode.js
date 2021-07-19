import React from "react";
import codeimage from "../../assets/codeimage.svg";
import codemessage from "../../assets/codemessgae.svg";
import "./Referralcode.css";
const Referralcode = () => {
  return (
    <div className="referral-code">
      <div>
        <div className="referral-page">
          <img src={codeimage} alt="" />
          <p className="referralParagraph">Invite & Earn N2000</p>
          <p className="referralText">
            Invite a friend to join OVest and earn N2000 as they sign up with
            your referral code and savest or invest.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "51px",
            marginRight: "81px",
            marginTop: "35px",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
            }}
          >
            Referral Code
          </p>
          <p
            style={{
              marginLeft: "29px",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "30px",
              marginTop: "-8px",
            }}
          >
            Angela
          </p>
          <img
            src={codemessage}
            alt=""
            style={{
              marginLeft: "14px",
              marginTop: "-20px",
            }}
          />
        </div>
        <button className="referral-button">Share</button>
      </div>
    </div>
  );
};

export default Referralcode;
