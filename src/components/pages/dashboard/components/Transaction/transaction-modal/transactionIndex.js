import React from "react";
import AllTransactionModal from "./AllTransactionModal";
import MyInvestmentModal from "./MyInvestmentModal";
import WithdrawalModal from "./MyInvestmentModal";

export const AllTransactionIndex = ({ Transac, setTransac }) => {
  let currentTransacation;
  switch (Transac) {
    case 0:
      currentTransacation = <AllTransactionModal setTransac={setTransac} />;
      break;

    default:
      break;
  }
  return <div className="current-page">{currentTransacation}</div>;
};

export const InvestmentTransactionIndex = ({ Transac, setTransac }) => {
  let currentInvestmentTransacation;
  switch (Transac) {
    case 0:
      currentInvestmentTransacation = (
        <MyInvestmentModal setTransac={setTransac} />
      );
      break;

    default:
      break;
  }
  return <div className="current-page">{currentInvestmentTransacation}</div>;
};

export const WithdrawalTransactionIndex = ({ Transac, setTransac }) => {
  let currentInvestmentTransacation;
  switch (Transac) {
    case 0:
      currentInvestmentTransacation = (
        <WithdrawalModal setTransac={setTransac} />
      );
      break;

    default:
      break;
  }
  return <div className="current-page">{currentInvestmentTransacation}</div>;
};
