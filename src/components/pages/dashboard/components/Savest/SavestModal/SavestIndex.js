import React from "react";
import SavestPaymentEnquiry from "../../Savest/SavestPages/SavestPaymentEnquiry";
import backicon from "../../../../../Assets/backicon.svg";
import SavestEnquiries from "../SavestPages/SavestEnquiries";
import SavestSavingsSummary from "../SavestPages/SavestSavingsSummary";


const SavestIndex = ({ section, setSection }) => {
  let currentPage;
  switch (section) {
    case 0:
      currentPage = <SavestPaymentEnquiry setSection={setSection} />;
      break;
    
    case 1:
       currentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setSection(0);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
           <SavestEnquiries setSection={setSection} />
        </>
           );
           break;
           
    
    case 2:
       currentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setSection(1);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
           <SavestSavingsSummary setSection={setSection} />          
        </>
      );
      break;

  
  }
  return <div>{currentPage}</div>;
};
export default SavestIndex;
