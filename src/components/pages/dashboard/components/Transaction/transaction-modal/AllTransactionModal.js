import React from "react";
import "./transactionmodal.css";

const AllTransactionModal = ({ setTransac }) => {
  return (
    <div className="alltransac-modal">
      <h5>Transaction Summary</h5>
      <p>Wallet deposit</p>

      <div className="summary-body">
        <div className="date-ses">
          <p className="date">
            Date: <span>Sat, Dec 12 2020</span>{" "}
          </p>
          <p className="time">
            Time:
            <span>8:40pm</span>
          </p>
        </div>

        <div className="amount-ses">
          <p className="amount-summary">
            Amount:
            <span>N10,000</span>{" "}
          </p>
          <div>
            {/* <p className="pending">
              Status: <span>Pending</span>{" "}
            </p> */}
            <p className="processed">
              Status: <span>Processed</span>{" "}
            </p>
          </div>
        </div>
        <p className="reference">Reference: 23rfefn4rokdfo</p>
        <p className="payment-met">Payment Method: Bank Transfer</p>
      </div>

      <div className="receipt-btn">
        <button className="download-receipt">Download Receipt</button>
      </div>
    </div>
  );
};

export default AllTransactionModal;
