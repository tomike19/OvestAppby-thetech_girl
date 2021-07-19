import React from "react";
import "./SilverInvestmentDetails.css";
import backtick from "../../../../../assets/backtick.svg";
import cardicon from "../../../../../assets/card-icon.svg";

const PaymentMethod = ({ setPage }) => {
  return (
    <div className="startinvestment-body">
      <div className="startinvestment-main">
        <div className="paymentmethod-main">
          <h5 className="paymentmethod-header">Payment Method</h5>
          <div className="payment-cards">
            <div className="paymentmethod-flex">
              <img src={cardicon} alt="" srcset="" className />
              <div>
                <h5 className="mb-4 wallet-title">Ovest Wallet</h5>
                <p className="investamount-balance mt-3">Balance: N0</p>
              </div>
              <img src={backtick} alt="" srcset="" onClick={() => setPage(5)} />
            </div>
          </div>

          <div className="payment-cards">
            <div className="paymentmethod-flex">
              <img src={cardicon} alt="" srcset="" className />
              <div>
                <h5 className="mb-4 wallet-title-wallet-title-silverinvestment">
                  Savest Wallet
                </h5>
                <p className="investamount-balance mt-3">Balance: N0</p>
              </div>
              <img src={backtick} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
