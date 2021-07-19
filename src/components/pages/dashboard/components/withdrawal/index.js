import React from "react";
import BAnkAccountMethod from "./withdrawal-pages/BankAccountMethod";
import BankConfirmPassword from "./withdrawal-pages/BankConfirmPassword";
import InvestPlan from "./withdrawal-pages/InvestPlan";
import SavestForm from "./withdrawal-pages/SavestForm";
import SavestNotice from "./withdrawal-pages/SavestNotice";
import TransferToInvestor from "./withdrawal-pages/TransferToInvestor";
import WithdrawalMethod from "./WithdrawalMethod";
import "./withdrawal.css";

import backicon from "../../../../Assets/backicon.svg";

const WithdrawalLogic = ({ stage, setStage }) => {
  let currentStage;

  switch (stage) {
    case 0:
      currentStage = <WithdrawalMethod setStage={setStage} />;
      break;

    case 1:
      currentStage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setStage(0);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <SavestForm setStage={setStage} />
        </>
      );
      break;

    case 2:
      currentStage = (
        <>
          {/* <button
            className="backicon"
            onClick={() => {
              setStage(1);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button> */}
          <SavestNotice setStage={setStage} />
        </>
      );
      break;

    case 3:
      currentStage = (
        <div className="invest-plan-logic">
          <button
            className="backicon"
            onClick={() => {
              setStage(0);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <InvestPlan setStage={setStage} />
        </div>
      );
      break;
    case 4:
      currentStage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setStage(0);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <BAnkAccountMethod setStage={setStage} />
        </>
      );
      break;

    case 5:
      currentStage = (
        <>
          {/* <button
            onClick={() => {
              setStage(0);
            }}
            style={{
              border: "none",
              background: "none",
              marginLeft: "34px",
              marginTop: "25px",
            }}
          >
            <img src={backicon} alt="back icon" />
          </button> */}
          <BankConfirmPassword setStage={setStage} />
        </>
      );
      break;

    case 6:
      currentStage = (
        <>
          <button
            onClick={() => {
              setStage(0);
            }}
            style={{
              border: "none",
              background: "none",
              marginLeft: "34px",
              marginTop: "25px",
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <TransferToInvestor setStage={setStage} />
        </>
      );
      break;

    default:
      currentStage = <WithdrawalMethod setStage={setStage} />;
      break;
  }

  return <div className="current-stage">{currentStage}</div>;
};

export default WithdrawalLogic;
