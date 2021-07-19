import React from 'react'
import buildImage from "../Assets/Build.svg";
import invest1 from "../Assets/invest1.svg";
import invest2 from "../Assets/invest2.svg";
import invest3 from "../Assets/invest3.svg";
import "./InvestmentRate.css"

const InvestmentRate = () => {
  return (
    <div className="invest-rate">
      <div>
        <img src={buildImage} alt="" className="invest-rate-image" />
      </div>
      <div className="invest-rate-body">
        <div className="invest-details">
          <p className="invest-text">Investment</p>
          <p className="invest-texts">
            Build your future with the best investment rates
          </p>
        </div>
      </div>
      <div className="investment-rate-section">
        <div>
          <img src={invest1} alt="" />
          <div className="vl"></div>
        </div>
        <p className="invest-section-text ml-3">
          Choose your preferred plan(s): With OVest you can invest in as many as
          possible investment plans you want for 3 or 6 months.
        </p>
      </div>
      <div className="investment-rate-section">
        <div>
          <img src={invest2} alt="" />
          <div className="vl"></div>
        </div>
        <p className="invest-section-text ml-3">
          Invest from OVest Wallet: Fund your OVest wallet using our methods of
          payment designed to suit you. Fund your investment from your OVest
          wallet.
        </p>
      </div>
      <div className="investment-rate-section">
        <div>
          <img src={invest3} alt="" />
        </div>
        <p className="invest-section-text ml-3">
          Choose your preferred plan(s): With OVest you can invest in as many as
          possible investment plans you want for 3 or 6 months.
        </p>
      </div>
    </div>
  );
}

export default InvestmentRate
