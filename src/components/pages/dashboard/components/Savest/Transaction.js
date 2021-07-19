import React from "react";
import "./Transaction.css";
import TransImage from "../../assets/Transaction.svg";
import savestfeeicon from "../../assets/savestfee-icon.svg";
import savesthouseicon from "../../assets/savest-houseicon.svg";

const Transaction = () => {
  return (
    <div className="TransactionSection">
      <div className="transactions">
        <div className="transactionDetails">
          <p className="detailsText">Recent Transactions</p>
          <img src={TransImage} alt="" className="centerImage" />
          <p className="trans-text">No transactions yet</p>
          <p className="transText">
            Create a target saving, the transactions will <br></br>appear here.
          </p>
        </div>
        <div className="tuitionandrent-main">
          <div className="tuition-main p-3">
            <div className="">
              <div className="mt-3">
              <img src={savestfeeicon} alt="" className=""/>

              </div>
              <p className="tuition-fees mt-4">Tuition Fees</p>
              <p className="dollar-amount">$0.00</p>
              <p className="fixed-plan">Fixed savest plan</p>
            </div>
            <div className="">
              <p className="interest-amount mt-4">Interest Rate</p>
              <p className="percentage-interest">0%</p>
              <p className="perannum">Per Annum</p>
            </div>
          </div>

          <div className="rent-main">
            <div className="">
              <div>
              <img src={savesthouseicon} alt="" />
              </div>
              <p className="tuition-fees mt-4">House Rent</p>
              <p className="dollar-amount">$0.00</p>
              <p className="fixed-plan">Flexible savest plan</p>
            </div>
            <div className="">
              <p className="interest-amount mt-3">Interest Rate</p>
              <p className="percentage-interest">$0.00</p>
              <p className="perannum">Per Annum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
