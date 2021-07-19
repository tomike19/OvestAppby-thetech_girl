import React from "react";
import "./withdrawal.css";
import savesticon1 from "../../../../Assets/savesticon.svg";
import investicon1 from "../../../../Assets/investmenticon.svg";
import bankicon1 from "../../../../Assets/bankicon.svg";
import tranfericon1 from "../../../../Assets/tranfericon.svg";

const WithdrawalMethod = ({ setStage }) => {
  return (
    <div>
      <div className="WithdrawalMethod">
        <h5>Withdraw</h5>
        <p>Where would you like to withdraw money to?</p>
      </div>

      <div className="withdraw-method">
        <div
          className="savestplan"
          onClick={() => {
            setStage(1);
          }}
        >
          <img src={savesticon1} alt="saves-icon" />
          <p className="withdrawplan-p">My Savest Plan</p>
        </div>
        <div
          className="investplan"
          onClick={() => {
            setStage(3);
          }}
        >
          <img src={investicon1} alt="saves-icon" />
          <p className="withdrawplan-p">Investment Plan</p>
        </div>
        <div
          className="bankplan"
          onClick={() => {
            setStage(4);
          }}
        >
          <img src={bankicon1} alt="saves-icon" />
          <p className="withdrawplan-pa">Bank Account</p>
        </div>
        <div
          className="transferplan"
          onClick={() => {
            setStage(6);
          }}
        >
          <img src={tranfericon1} alt="saves-icon" />
          <p className="withdrawplan-p">Transfer to Ovestor</p>
        </div>
      </div>

      <div className="fundmethodnotification">
        <p>
          Kindly note that your withdrawal is made by your deposit/investment
          method
        </p>
      </div>
    </div>
  );
};

export default WithdrawalMethod;
