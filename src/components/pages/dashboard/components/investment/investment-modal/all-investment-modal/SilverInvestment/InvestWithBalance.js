import React, { useState } from "react";
import "./SilverInvestmentDetails.css";
import backtick from "../../../../../assets/backtick.svg";
import closemodalicon from "../../../../../assets/close-modal-icon.svg";
import successicon from "../../../../../assets/success-icon.svg";

const InvestNow = () => {
  const [showRoiInfo, setShowRoiInfo] = useState(false);
  return (
    <div className="startinvestment-body">
      <div className="startinvestment-main">
        <div className="confirminvestment-main">
          <h5 className="confirminvestment-h5"> Invest Now</h5>
          <p className="confirminvestment-textbody mt-2">
            Choose Payment Method
          </p>
        </div>
        <div className="silverplan">
          <p className="fundwith-header">Fund With</p>
          <hr className="hr" />
          <div className="silverplan-flex">
            <div className="ovest-wallet">
              <p className="ovestwallet-main">Ovest Wallet</p>
              <div className="investamount">
                <p className="now-matured mt-4">Balance: N20,000,000</p>
                <p className="investamount-mini mb-2">
                  Change this{" "}
                  <span>
                    <img src={backtick} alt="" className="ml-2" />
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="note-main p-4">
          <p className="funds-deduction">
            Funds will be deducted automatically from your available payment
            method(s) on OVest.
          </p>
        </div>
        <div className="checkbox-main">
          <input type="checkbox" name="" id="" className="checkbox-input" />
          <label htmlFor="" className="termsandcondition">
            By clicking this, you’ve agreed to
            <span> OVest terms and conditions</span>
          </label>
        </div>
        <button className="invest" onClick={() => setShowRoiInfo(true)}>
          Securely Invest 50.000
        </button>
      </div>
      <div
        className={`silverinvestment__roi-info-bg ${
          showRoiInfo ? "show-roi-info" : ""
        }`}
      >
        <div className="silverinvestment__roi-info-content">
          <div className="profit-roi-modal">
            <div className="p">
              <div className="success-img-icon">
                <img
                  src={successicon}
                  alt="close-modal"
                  className="close-icon-btn"
                  onClick={() => setShowRoiInfo(false)}
                />
              </div>
              <p className="profit-roi-textbody pl-5 pr-5">
                You have successfully subscribed to Silvest Investment plan with
                <span> N50,000 </span> debited from your OVest wallet
              </p>
              <div className="go-to-dashboard">
                <button className="go-to-dashboard-btn">Go to Dashboard</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestNow;
