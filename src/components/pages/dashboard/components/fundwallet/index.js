import React from "react";
import BankTransfer from "./bank/BankTransfer";
import BankTransferDetails from "./bank/BankTransferDetails";
import BankTransferSucces from "./bank/BankTransferSucces";
import BankTranferVerify from "./bank/BankTransferVerify";
import AddNewBankCard from "./card/AddNewBankCard";
import CardAmountInput from "./card/CardAmountInput";
// import CardPayment from "./card/CardAmountInput";
import CardFunding from "./card/CardFunding";
// import CardSuccess from "./card/CardPayment";
import CardPaymentSuccess from "./card/CardPaymentSuccess";
import FundWalletMethod from "./FundWalletMethod";
import "./fundwallet.css";

import backicon from "../../../../Assets/backicon.svg";

const FundWalletLogic = ({ stage, setStage }) => {
  let currentStage;

  switch (stage) {
    case 0:
      currentStage = <FundWalletMethod setStage={setStage} />;
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
          <BankTransfer setStage={setStage} />
        </>
      );
      break;

    case 2:
      currentStage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setStage(1);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <BankTransferDetails setStage={setStage} />
        </>
      );
      break;

    case 3:
      currentStage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setStage(2);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <BankTranferVerify setStage={setStage} />
        </>
      );
      break;
    case 4:
      currentStage = (
        <>
          {/* <button
            className="backicon"
            onClick={() => {
              setStage(2);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button> */}
          <BankTransferSucces setStage={setStage} />
        </>
      );
      break;

    case 5:
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
          <CardFunding setStage={setStage} />
        </>
      );
      break;

    case 6:
      currentStage = (
        <>
          <button
            onClick={() => {
              setStage(5);
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
          <AddNewBankCard setStage={setStage} />
        </>
      );
      break;

    case 7:
      currentStage = <CardAmountInput setStage={setStage} />;
      break;

    case 8:
      currentStage = <CardPaymentSuccess setStage={setStage} />;
      break;

    default:
      currentStage = <FundWalletMethod setStage={setStage} />;
      break;
  }

  return <div className="current-stage">{currentStage}</div>;
};

export default FundWalletLogic;
