import React from "react";
import dots from "../../../../../assets/dots.svg";
import angelaicon from "../../../../../assets/angelaicon.svg";

const MyInvestMoniya = () => {
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
              <p className="matured-status">Matured</p>
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
        <button className="claim-property">Claim property</button>
        <div className="moniya-note">
          <p className="moniyamain-note">
            Note: There is no cash payout in LandVest investment (OHouse
            Estate), interest and capital would be used in becoming a
            Land-Owner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyInvestMoniya;
