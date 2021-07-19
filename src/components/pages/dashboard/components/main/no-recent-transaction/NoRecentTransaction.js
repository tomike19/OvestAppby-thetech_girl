import React from "react";
import "./NoRecentTransaction.css";
import recentTransac from "../../../assets/recenttransac.png";
const NoRecentTransaction = () => {
  return (
    <div
      style={{
        width: "92%",
      }}
    >
      <div className="recent-transaction">
        <h4>Recent Transactions</h4>
        <div className="no-transact">
          <img src={recentTransac} alt="recent- transact" srcSet="" />
          <h6>No Transaction Yet</h6>
          <p>
            Start using your OVest account and your transactions will appear
            here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoRecentTransaction;
