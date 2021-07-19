import React, { useState } from "react";
import "./SilverInvestmentDetails.css";
import frame from "../../../../../assets/Frame.svg";
import closemodalicon from "../../../../../assets/close-modal-icon.svg";

const SilverInvestmentDetails = ({ setPage }) => {
  const [showRoiInfo, setShowRoiInfo] = useState(false);
  return (
    <>
      {" "}
      <div className="silvestinvestment">
        <div className="silvestinvestment-body">
          <div className="silvestinvestment-main">
            <div className="silvestheader-flex">
              <h5 className="silvestinvestment-h5">
                Silvest Investment Details
              </h5>

              <div className="info-icon mt-5">
                <img
                  src={frame}
                  alt="frame"
                  onClick={() => {
                    setShowRoiInfo(true);
                    console.log("hu");
                  }}
                />
              </div>
            </div>
            {/* <hr/> */}
            <p className="silvestinvestment-p">Description</p>
            <p className="silvestinvestment-textbody">
              Silvest Investment Plan is a 3 months plan with a minimum capital
              of N 50,000. The interest rate is 50% which would be paid 15%
              monthly and the third month would be 20% and the initial capital.
            </p>
          </div>
          <div className="silvest-flexbody">
            <div className="minimum-pricebody">
              <p className="minimum-price">Minimum Price</p>
              <p className="price">N50,000</p>
            </div>
            <div className="durationbody">
              <p className="duration">Duration</p>
              <p className="month">2 months</p>
            </div>
          </div>
          <div className="silvest-flexbody2">
            <div className="minimum-pricebody">
              <p className="minimum-price">Interest Rate</p>
              <p className="price">50%</p>
            </div>
            <div className="durationbody">
              <p className="duration">Investment Type</p>
              <p className="month">Flexible income</p>
            </div>
          </div>
          <div className="note-main">
            <p className="note">
              Note: Investment capital are not fixed as seen above, but are
              between the values of N50,000 and above
            </p>
          </div>
          <button className="invest" onClick={() => setPage(1)}>
            Invest
          </button>
        </div>

        <div
          className={`silverinvestment__roi-info-bg 
             ${showRoiInfo ? "show-roi-info" : ""}`}
        >
          <div className="silverinvestment__roi-info-content">
            <div className="profit-roi-modal">
              <div>
                <img
                  src={closemodalicon}
                  alt="close-modal"
                  className="close-icon-btn"
                  onClick={() => setShowRoiInfo(false)}
                />
              </div>
              <h5 className="profit-roi-header">
                How do we turn profit to pay ROIs?
              </h5>
              <p className="profit-roi-textbody">
                OVest is an investment/fund managment platform that generates
                proifit by professionally venturing into money market (Forex &
                Crypto trading), Real Estate, Agriculture, Transportaion and
                Small Businesses. Money generated from these portfolio are used
                in paying you and all subscribers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SilverInvestmentDetails;
