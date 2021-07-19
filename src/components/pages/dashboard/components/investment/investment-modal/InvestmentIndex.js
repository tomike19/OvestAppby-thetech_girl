import React from "react";
import SilverInvestmentDetails from "../../investment/investment-modal/all-investment-modal/SilverInvestment/SilverInvestmentDetails";
import StartInvestment from "../../investment/investment-modal/all-investment-modal/SilverInvestment/StartInvestment";
import ConfirmInvestment from "../../investment/investment-modal/all-investment-modal/SilverInvestment/ConfirmInvestment";
import InvestNow from "../../investment/investment-modal/all-investment-modal/SilverInvestment/InvestNow";
import PaymentMethod from "../../investment/investment-modal/all-investment-modal/SilverInvestment/PaymentMethod";
import InvestWithBalance from "../../investment/investment-modal/all-investment-modal/SilverInvestment/InvestWithBalance";
import backicon from "../../../../../Assets/backicon.svg";

const InvestmentIndex = ({ page, setPage }) => {
  let currentPage;
  switch (page) {
    case 0:
      currentPage = <SilverInvestmentDetails setPage={setPage} />;
      break;

    case 1:
      currentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setPage(0);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <StartInvestment setPage={setPage} />
        </>
      );
      break;
    case 2:
      currentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setPage(1);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <ConfirmInvestment setPage={setPage} />
        </>
      );
      break;
    case 3:
      currentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setPage(2);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <InvestNow setPage={setPage} />
        </>
      );
      break;
    case 4:
      currentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setPage(2);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <PaymentMethod setPage={setPage} />
        </>
      );
      break;

    case 5:
      currentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setPage(2);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <InvestWithBalance setPage={setPage} />
        </>
      );
      break;
  }

  return <div className="current-stage">{currentPage}</div>;
};

export default InvestmentIndex;
