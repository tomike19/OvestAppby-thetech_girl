import React, { useState } from "react";
import "./SpecialPackage.css";
import "../SilverInvestment/SilverInvestmentDetails.css";
import landvest from "../../../../../assets/landvesticon.svg";
import closemodalicon from "../../../../../assets/close-modal-icon.svg";

const IbadanLandvest = ({ setPage }) => {
  const [showRoiInfo, setShowRoiInfo] = useState(false);

  return (
    <div>
      <div className="silvestinvestment">
        <div className="silvestinvestment-body">
          <div className="silvestinvestment-main">
            <h5 className="silvestinvestment-h5 mb-3">Ibadan LandVest Plan</h5>
            <p className="silvestinvestment-textbody">
              Invest in OHouseEstate and become a land-owner in 6 months
            </p>
          </div>
          <div className="landvest-location mt-4">
            <div className="landvest-flex">
              <img src={landvest} alt="an iamhge" />
              <h5 className="landvest-title">Moniya (DryPort/Railway)</h5>
            </div>
            <p className="landvest-p">
              Become a land-owner at Moniya, Ibadan in <span>6 months </span>by
              investing
              <span>N300,000</span> instead of <span>N650,000</span>
            </p>
            <button
              onClick={() => setShowRoiInfo(true)}
              className="landvest-button mb-4"
            >
              View Details
            </button>
          </div>

          <div className="landvest-location mt-4">
            <div className="landvest-flex">
              <img src={landvest} alt="an iamhge" />
              <h5 className="landvest-title">Akaran (Ilaji Resort)</h5>
            </div>
            <p className="landvest-p">
              Become a land-owner at Moniya, Ibadan in <span>6 months </span>by
              investing
              <span>N650,000 </span>instead of <span>N1,400,000</span>
            </p>
            <button className="landvest-button mb-4">View Details</button>
          </div>

          <div className="landvest-location mt-4">
            <div className="landvest-flex">
              <img src={landvest} alt="an iamhge" />
              <h5 className="landvest-title">Ologuneru (Ido LGA)</h5>
            </div>
            <p className="landvest-p">
              Become a land-owner at Moniya, Ibadan in <span>6 months </span>by
              investing
              <span>N650,000 </span>instead of <span>N1,400,000</span>
            </p>
            <button className="landvest-button mb-4">View Details</button>
          </div>
        </div>
      </div>
      <div
        className={`silverinvestment__roi-info-bg ${
          showRoiInfo ? "show-roi-info" : ""
        }`}
      >
        <div className="silverinvestment__roi-info-content">
          <div className="profit-roi-modal">
            <div className="dryport-body">
              <div className="dryport-header">
                <h5>Moniya (DryPort/Railway)</h5>
                <img
                  src={closemodalicon}
                  alt="close-modal"
                  className="close-icon-btn"
                  onClick={() => setShowRoiInfo(false)}
                />
              </div>
              <div className="railway-main">
                <div className="railway-body">
                  <div className="railway-details">
                    <p className="mini-header">Investment Rate</p>
                    <h5 className="duration-plan">N300,000</h5>
                  </div>
                  <div className="railway-details">
                    <p className="mini-header">Investment Rate</p>
                    <h5 className="duration-plan">N300,000</h5>
                  </div>
                </div>
                <div className="railway-body">
                  <div className="railway-details">
                    <p className="mini-header">Investment Rate</p>
                    <h5 className="duration-plan">N300,000</h5>
                  </div>
                  <div className="railway-details">
                    <p className="mini-header">Investment Rate</p>
                    <h5 className="duration-plan">N300,000</h5>
                  </div>
                </div>
              </div>
              <div className="dryport-btn">
                <button onClick={() => setPage(4)} className="invest">
                  Invest Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IbadanLandvest;
