import React from "react";
import "./SilverInvestmentDetails.css";

const ConfirmInvestment = ({ setPage }) => {
  return (
    <div className="confirminvestment">
      <div className="startinvestment-main">
        <div className="confirminvestment-main">
          <h5 className="confirminvestment-h5"> Confirm Investment</h5>
          <p className="confirminvestment-textbody mt-2">
            Invest in silvest plan and earn 50% interest in 3 months
          </p>
        </div>
        <div className="silverplan">
          <h5 className="silverplan-header">Silvest Investment Plan</h5>
          <div className="silverplan-flex">
            <div className="investamount">
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
              <p className="flex-main">Interest Rate:</p>
              <p className="pricetag">50% P/A</p>
            </div>
            <div className="investamount">
              <p className="flex-mini">Total Payout:</p>
              <p className="pricetag-mini">N70,000</p>
            </div>
          </div>
        </div>
        <div className="paymentreturn-main">
          <div className="paymentreturn">
            <h5 className="silverplan-header">
              Returns Payment (Investment calculator)
            </h5>
            <div className="payment-interest">
              <p className="month-duration mt-5">First Month:</p>
              <p className="month-percentage mt-5">15% Interest</p>
            </div>
            <div className="payment-interest">
              <p className="month-duration">Second Month:</p>
              <p className="month-percentage">15% Interest</p>
            </div>
            <div className="payment-interest">
              <p className="month-duration">Third Month:</p>
              <p className="month-percentage">20% Interest + Capital</p>
            </div>
          </div>
        </div>
        <div className="checkbox-main">
          <input type="checkbox" name="" id="" className="checkbox-input" />
          <label htmlFor="" className="termsandcondition">
            By clicking this, you’ve agreed to
            <span> OVest terms and conditions</span>
          </label>
        </div>
        <button className="invest" onClick={() => setPage(3)}>
          Invest
        </button>
      </div>
    </div>
  );
};
export default ConfirmInvestment;
