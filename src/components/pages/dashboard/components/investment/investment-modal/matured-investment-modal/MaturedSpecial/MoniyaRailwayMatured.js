import React, { useState } from "react";
import "./MaturedSpecial.css";
import "../../all-investment-modal/SilverInvestment/SilverInvestmentDetails.css";
import "../../all-investment-modal/SilverInvestment/SilverInvestmentDetails.css";
import dots from "../../../../../assets/dots.svg";
import angelaicon from "../../../../../assets/angelaicon.svg";
import closemodalicon from "../../../../../assets/close-modal-icon.svg";
import railwayicon from "../../../../../assets/moniya-railway-icon.svg";

const MoniyaRailwayMatured = () => {
  const [showRoiInfo, setShowRoiInfo] = useState(false);

  return (
    <div className="moniya-body">
      <div className="moniya-main">
        <div className="headertitle-flex">
          <h5 className="moniya-h5">Moniya (DryPort/Railway)</h5>
          <div className="connect-dots mt-3">
            <img src={dots} alt="" className="connect-dotsimg" />
          </div>
        </div>
        <div className="mt-4">
          <img src={angelaicon} alt="" />
        </div>
        <div className="silverplan">
          <h5 className="silverplan-header">Goals Investment</h5>
          <div className="silverplan-flex">
            <div className="investamount mt-4">
              <p className="flex-main">Investment Amount:</p>
              <p className="pricetag">N50,000.00</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Duration:</p>
              <p className="flex-mini">3 Months</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Start Date:</p>
              <p className="flex-mini">10 Apr, 2021</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Maturity Date:</p>
              <p className="flex-mini">10 Jun, 2021</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Status:</p>
              <p className="now-matured">Matured</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Investment Type:</p>
              <p className="flex-mini">Real Estate</p>
            </div>
            <div className="investamount">
              <p className="flex-main">Location:</p>
              <p className="flex-mini">Ibadan</p>
            </div>
          </div>
        </div>
        <button onClick={() => setShowRoiInfo(true)} className="invest">
          Claim property
        </button>
        <div className="moniya-note">
          <p className="moniyamain-note">
            Note: There is no cash payout in LandVest investment (OHouse
            Estate), interest and capital would be used in becoming a
            Land-Owner.
          </p>
        </div>
      </div>
      <div
        className={`silverinvestment__roi-info-bg ${
          showRoiInfo ? "show-roi-info" : ""
        }`}
      >
        <div className="silverinvestment__roi-info-content">
          <div className="profit-roi-modal">
            <div className="claim-property-img">
              <img
                src={closemodalicon}
                alt="close-modal"
                className="close-icon-btn"
                onClick={() => setShowRoiInfo(false)}
              />
            </div>
            <div className="ovest-support-main">
              <div className="railway-icon-img">
                <img src={railwayicon} alt="" />
              </div>
              <h5>Moniya (DryPort/Railway)</h5>
              <p>
                Contact <span> OVest Support</span> to claim your landvest investment plan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoniyaRailwayMatured;
