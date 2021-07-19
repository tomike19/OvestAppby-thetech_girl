import React from "react";
import AddBankAccount from "../AddBankAccount";
import ConfirmBank from "../ConfirmBank";
// import BankSuccessful from "../BankSuccessful";
import backicon from "../../../../../../Assets/backicon.svg";
import '../../BankCards/BankCard.css'


const BankModalIndex = ({ section, setSection }) => {
  let CurrentPage;
  switch (section) {
    case 0:
      CurrentPage = <AddBankAccount setSection={setSection} />;
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
          <ConfirmBank setSection={setSection} />
        </>
      );
      break;
    // case 2:
    //   CurrentPage = (
    //     <>
    //       <button
    //         className="backicon"
    //         onClick={() =>
    //         {
    //           setSection( 1 );
    //         }}
    //       >
    //         <img src={backicon} alt="back icon" className="back-icon" />
    //       </button>
    //       <BankSuccessful setSection={setSection} />
    //     </>
    //   );
    //   break;
  }

  return <div className="current-page">{CurrentPage}</div>;
};

export default BankModalIndex;
