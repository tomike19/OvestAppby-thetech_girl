import React from "react";
import Legal from "../Legal/Legal";
import LegalTerms from "./../Legal/LegalTerms";
import backicon from "../../../../../Assets/backicon.svg";
import Faqs from "../Legal/Faqs";

const LegalIndex = ({ section, setSection }) => {
  let CurrentPage;
  switch (section) {
    case 0:
      CurrentPage = <Legal setSection={setSection} />;
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
            {/* <img src={info} alt="" /> */}
          </button>
          <LegalTerms setSection={setSection} />
        </>
      );
      break;

    case 2:
      CurrentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setSection(0);
            }}
          >
            <img src={backicon} alt="back icon" className="back-icon" />
            {/* <img src={info} alt="" /> */}
          </button>
          <Faqs setSection={setSection} />
        </>
      );
      break;
  }

  return <div className="current-page">{CurrentPage}</div>;
};

export default LegalIndex;
