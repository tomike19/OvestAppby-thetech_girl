import React from "react";
import PaymentOption from "../AccountDetails/PaymentOption";
import "./AccountIndex.css";

const AccountIndex = ({ section, setSection }) => {
  let CurrentPage;
  switch (section) {
    case 0:
      CurrentPage = <PaymentOption setSection={setSection} />;
      break;

    // case 3:
    //   CurrentPage = (
    //     <>
    //       <a href="#" className="backicon">
    //         <img src={backicon} alt="back icon" className="back-icon" />
    //       </a>
    //       <Legal setSection={setSection} />
    //     </>
    //   );

    // case 4:
    //   CurrentPage = (
    //     <>
    //       <a
    //         href="#"
    //         className="backicon"
    //         onClick={() => {
    //           setSection(4);
    //         }}
    //       >
    //         <img src={backicon} alt="back icon" className="back-icon" />
    //       </a>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    //       </p>
    //     </>
    //   );
    //   // case 4:
      //   CurrentPage = (
      //     <>
      //       <a
      //         href="#"
      //         className="backicon"
      //         onClick={() => {
      //           setSection(4);
      //         }}
      //       >
      //         <img src={backicon} alt="back icon" className="back-icon" />
      //       </a>
      //       <LegalTerms setSection={setSection} />
      //     </>
      //   );
      break;
  }
  return <div className="current-page">{CurrentPage}</div>;
};

export default AccountIndex;
