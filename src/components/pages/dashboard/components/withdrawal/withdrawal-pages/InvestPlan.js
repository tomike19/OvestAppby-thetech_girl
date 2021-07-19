import React from "react";
import "./Withdrawal-pages.css";

const InvestPlan = () => {
  return (
    <div
      className="investplan-inner"
      style={{
        marginTop: "40px",
        marginBottom: "23px",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="investplan-header">
        <h5>Withdraw to Investment</h5>
        <p>Choose your preferred investment plan</p>
      </div>
      <div className="investcard1">
        <div className="savestplanhead">
          <h5>Silvest Investment Plan</h5>
          <small>
            {" "}
            <em> 50% Interest Rate</em>
          </small>
        </div>
        <div className="savestplanbody">
          <p>
            Lock-away funds safely in our Silvest investment plan for{" "}
            <span>3 months</span> with at least <span>NGN50,000.</span>
          </p>
          <footer>
            View details
            <i class="fas fa-angle-double-right"></i>
          </footer>
        </div>
      </div>

      <div className="investcard1">
        <div className="savestplanhead">
          <h5
            style={{
              color: "#281BB6",
            }}
          >
            Goldvest Investment Plan
          </h5>
          <small>
            {" "}
            <em> 125% Interest Rate</em>
          </small>
        </div>
        <div className="savestplanbody">
          <p>
            Lock-away funds safely in our Silvest investment plan for{" "}
            <span>6 months</span> with at least <span>NGN100,000.</span>
          </p>
          <footer>
            View details
            <i class="fas fa-angle-double-right"></i>
          </footer>
        </div>
      </div>
      <div className="investcard1">
        <div className="savestplanhead">
          <h5 style={{ color: "#281BB6" }}>Special Package</h5>
        </div>
        <div className="savestplanbody">
          <p>
            Lock-away funds safely in our Special packages by investing in
            various land packages.
          </p>
          <footer>
            View details
            <i class="fas fa-angle-double-right"></i>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default InvestPlan;
