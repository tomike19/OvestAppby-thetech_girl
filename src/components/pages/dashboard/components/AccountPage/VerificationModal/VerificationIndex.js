import React from "react";
import backicon from "../../../../../Assets/backicon.svg";
import VerificationDetails from "./Verification/VerificationDetails";
import BankDetails from "./Verification/BankDetails";
import Identification from "./Verification/Identification";
import Residence from "./Verification/Residence";

const VerificationIndex = ({ section, setSection }) => {
  let CurrentPage;
  switch (section) {
    case 0:
      CurrentPage = <VerificationDetails setSection={setSection} />;
      break;

    case 1:
      CurrentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setSection(0);
            }}
          >
            <img src={backicon} alt="back icon" className="back-icon" />
          </button>
          <BankDetails setSection={setSection} />
        </>
      );
      break;
    case 2:
      CurrentPage = (
        <>
          <button
            className="backicon"
            onClick={() =>
            {
              setSection( 0 );
            }}
          >
            <img src={backicon} alt="back icon" className="back-icon" />
          </button>
          <Identification setSection={setSection} />
        </>
      );
      break;
    case 3:
      CurrentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setSection(0);
            }}
          >
            <img src={backicon} alt="back icon" className="back-icon" />
          </button>
          <Residence setSection={setSection} />
        </>
      );
  }

  return <div className="current-page">{CurrentPage}</div>;
};

export default VerificationIndex;
