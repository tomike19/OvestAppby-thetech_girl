import React from "react";
import "./Transactioncard.css";

const TransactionCard = () => {
  return (
    <div className="TransactionSection">
      <div className="Savings">
        <div className="Savings-details">
          <p className="infoText">Savings Info</p>
          <p className="start-text">Start Date</p>
          <p
            style={{
              fontSize: "1.6rem",
              fontStyle: "normal",
              fontWeight: 600,
              marginTop: "12px",
            }}
          >
            Mar 25, 2021
          </p>
          <p className="start-text">Start Date</p>
          <p
            style={{
              fontSize: "1.6rem",
              fontStyle: "normal",
              fontWeight: 600,
              marginTop: "12px",
            }}
          >
            Mar 25, 2021
          </p>
          <p className="withdraw-text">Withdrawal</p>
          <div className="textMonth">
            <span className="textNumber mr-2">0</span>this month
          </div>
          <p className="info">Your autosave is off</p>
        </div>
        <div className="sectionDetails">
          <p className="activeText">Active</p>
          <p className="withdraw-texts">Maturity Date</p>
          <p
            style={{
              fontSize: "1.6rem",
              fontStyle: "normal",
              fontWeight: 600,
              marginLeft: "10px",
              marginTop: "12px",
            }}
          >
            Jun 25, 2021
          </p>
          <p className="frequency-texts">Frequency</p>
          <p
            style={{
              fontSize: "1.6rem",
              fontStyle: "normal",
              fontWeight: 600,
              marginLeft: "50px",
              marginTop: "12px",
            }}
          >
            Weekly
          </p>
          <p className="withdraw-text">Total Payout</p>
          <p
            style={{
              fontSize: "1.6rem",
              fontStyle: "normal",
              fontWeight: 600,
              marginLeft: "40px",
              marginTop: "10px",
            }}
          >
            N70,000
          </p>
          <p className="totalText">Turn On</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
