import React, { useState } from "react";
import "./MyInvestment.css";
import Button from "@material-ui/core/Button";
import closemodalicon from "../../../../../Assets/closemodalicon.svg";
import Rectangle64 from "../../../assets/Rectangle 64.svg";
import MyInvestmentIndex from "../investment-modal/my-investment-modal/MyInvestmentModal/MyInvestmentIndex";
import MyInvestSpecialIndex from "../investment-modal/my-investment-modal/MyInvestmentSpecial/MyInvestSpecialIndex"

const MyInvestment = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="parent-allinvestment">
      <p className="get-started">Here is the list of all your investments</p>
      <div className="all-investment">
        <img src={Rectangle64} alt="" className="allinvestment-img" />
        <div className="all-investmentchild">
          <h6 className="allinvestment-h6">Silvest Investment Plan</h6>
          <p className="allinvestment-p">Capital NGN50,000</p>
          <div>
            <a href="#myinvestmentmodal">
              <Button
                variant="contained"
                color="#"
                style={{
                  backgroundColor: "#0768F6",
                  color: "white",
                  width: "149px",
                  height: "40px",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "19px",
                  borderRadius: "4px 4px 4px 0px",
                  letterSpacing: "0.03em",
                  textAlign: "center",
                  marginTop: "4rem",
                }}
              >
                Plan Details
              </Button>
            </a>
          </div>
        </div>
        <div className="balance-sheet">
          <p className="balance-plan">Not matured </p>
          <p className="balance-countdown">Countdown: 3days</p>
          <p className="balance-naira">N150,000</p>
          <p className="balance-p">Balance</p>
        </div>
      </div>

      <div className="all-investment">
        <img src={Rectangle64} alt="" className="allinvestment-img" />
        <div className="all-investmentchild">
          <h6 className="allinvestment-h6">Silvest Investment Plan</h6>
          <p className="allinvestment-p">Capital NGN50,000</p>
          <button className="allinvestment-button">Plan Details</button>
        </div>
        <div className="balance-sheet">
          <p className="balance-plan">Not matured </p>
          <p className="balance-countdown">Countdown: 3days</p>
          <p className="balance-naira">N150,000</p>
          <p className="balance-p">Balance</p>
        </div>
      </div>

      <div className="all-investment">
        <img src={Rectangle64} alt="" className="allinvestment-img" />
        <div className="all-investmentchild">
          <h6 className="allinvestment-h6">Special Package Plan</h6>
          <p className="allinvestment-p">Capital NGN50,000</p>
          <div>
            <a href="#myinvestspecial">
              <Button
                variant="contained"
                color="#"
                style={{
                  backgroundColor: "#0768F6",
                  color: "white",
                  width: "149px",
                  height: "40px",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "19px",
                  borderRadius: "4px 4px 4px 0px",
                  letterSpacing: "0.03em",
                  textAlign: "center",
                  marginTop: "4rem",
                }}
              >
                Plan Details
              </Button>
            </a>
          </div>
        </div>
        <div className="balance-sheet">
          <p className="balance-plan">Not matured </p>
          <p className="balance-countdown">Countdown: 3days</p>
          <p className="balance-naira">N150,000</p>
          <p className="balance-p">Balance</p>
        </div>
      </div>
      {/* my investment silver plan  */}
      <>
        <div id="myinvestmentmodal" className="myinvestmentmodal">
          <div className="investmodal-head">
            {page === 0 ? (
              <a
                href="#"
                className="closemodalicon-btn"
                onClick={() => {
                  setPage(0);
                }}
              >
                <img src={closemodalicon} alt="" className="closemodal" />
              </a>
            ) : null}

            <MyInvestmentIndex {...{ page, setPage }} />
          </div>
        </div>
      </>
      {/* my investment special package */}
      <>
        <div id="myinvestspecial" className="myinvestspecial">
          <div className="investmodal-head">
            {page === 0 ? (
              <a
                href="#"
                className="closemodalicon-btn"
                onClick={() => {
                  setPage(0);
                }}
              >
                <img src={closemodalicon} alt="" className="closemodal" />
              </a>
            ) : null}

            <MyInvestSpecialIndex {...{ page, setPage }} />
          </div>
        </div>
      </>
    </div>
  );
};

export default MyInvestment;
