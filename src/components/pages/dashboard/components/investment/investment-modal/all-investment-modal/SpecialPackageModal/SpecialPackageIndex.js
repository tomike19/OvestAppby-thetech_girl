import React from "react";
import SelectLocation from "./SelectLocation";
import SpecialInvestDetails from "./SpecialInvestDetails";
import IbadanLandvest from "./IbadanLandvest";
import SpecialPackageInvestNow from "./SpecialPackageInvestNow";
import backicon from "../../../../../../../Assets/backicon.svg";
import InvestWithBalance from "../../all-investment-modal/SilverInvestment/InvestWithBalance";

const SpecialPackageIndex = ({ page, setPage }) => {
  let currentPage;
  switch (page) {
    case 0:
      currentPage = <SpecialInvestDetails setPage={setPage} />;
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
          <SelectLocation setPage={setPage} />
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
          <IbadanLandvest setPage={setPage} />
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
          <SpecialPackageInvestNow setPage={setPage} />
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
          <InvestWithBalance setPage={setPage} />
        </>
      );
      break;
  }

  return <div className="current-stage">{currentPage}</div>;
};

export default SpecialPackageIndex;
