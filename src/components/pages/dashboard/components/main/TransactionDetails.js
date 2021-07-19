import React from "react";
import "./transaction-d.css";
function TransactionDetails({ icon, title, date, amount, status, style }) {
  return (
    <div className="transactionD" onclick>
      <div className="transactionD-left">
        <img src={icon} alt="" />
        <div className="">
          <p className="wallet-title">{title}</p>
          <p className="date">{date}</p>
        </div>
      </div>
      <div className="transactionD-right">
        <p className="wallet-amount" style={style}>
          {amount}
        </p>
        <p className="wallet-status">{status}</p>
      </div>
      {/* <div className="hr"></div> */}
    </div>
  );
}

export default TransactionDetails;
