import React from "react";
import './SilverInvestmentDetails.css'
import cardcloseicon from "../../../../../../../Assets/cardcloseicon.svg";

const AboutProfit = () => {
  return (
    <div className="card-display">
      <div className="cardsuccesswrapper">
        {/* <button
          className="closemodaliconsucess-btn"
          onClick={() => {
            setPage(0); 
          }}
        >
          <img
            className="cardcloseicon "
            src={cardcloseicon}
            alt="card close icon"
          />
        </button> */}
        <div>
            <h5>How do we turn profit to pay ROIs?</h5>
        <p className="notice-head">
        OVest is an investment/fund managment platform that generates proifit by
         professionally venturing into money market (Forex & Crypto trading), Real Estate, Agriculture, 
         Transportaion and Small Businesses.
         Money generated from these portfolio are used in paying you and all subscribers.
        </p>
        </div>
      </div>
    </div>
  );
};

export default AboutProfit;
