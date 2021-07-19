import React from "react";
import "./ReferralWithdraw.css";

const ReferralWithdraw = () => {
  return (
    <div className="withdraw-page">
      <div className="withdraw-text">
        <p>Withdraw Referral Bonus</p>
      </div>
      <div className="withdraw">
        <input
          type="text"
          className="withdraw-input"
          placeholder="Enter amount"
        />
        <p>Available balance: NGN30,000</p>
      </div>
      <div>
        <select className="select-bank">
          <option value="" key="" >
            Select Bank
          </option>
          <option value="" key="" >
            First Bank
          </option>
        </select>
      </div>
      <button className="withdraw-button1">Withdraw</button>
    </div>
  );
};

export default ReferralWithdraw;
