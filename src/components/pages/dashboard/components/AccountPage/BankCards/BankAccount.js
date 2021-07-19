import React, { useState } from "react";
import AddIcon from "../../../assets/AddBankIcon.svg";
import "./BankCard.css";
import BankModalIndex from "./BankModal/BankModalIndex";
import ATM from "../../../assets/ATM.svg";
import deleteIcon from "../../../assets/delete-icon.svg"
import backicon from "../../../../../Assets/backicon.svg";

const BankAccount = () => {
  const [section, setSection] = useState(0);

  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        <a href="#AddBankModal">
          <div className="bank-details">
            <img src={AddIcon} alt="" className="bank-icon" />
            <p className="bank-text">Add new bank</p>
          </div>
        </a>
        {/* <div className="atm-card">
            <img src={ATM} alt="" />
          </div> */}
        {/* <div className="delete-body">
          <div className="delete-details">
            <img src={deleteIcon} alt="" />
            <p className="ml-3 pt-4">Delete Account</p>
          </div>
        </div> */}
      </div>

      <>
        <div id="AddBankModal" className="addbank-modal">
          <div className="accountmodal-head">
            {section === 0 ? (
              <a href="#" className="backicon">
                <img src={backicon} alt="back icon" className="back-icon" />
              </a>
            ) : null}
            <BankModalIndex {...{ section, setSection }} />
          </div>
        </div>
      </>
    </div>
  );
};

export default BankAccount;
