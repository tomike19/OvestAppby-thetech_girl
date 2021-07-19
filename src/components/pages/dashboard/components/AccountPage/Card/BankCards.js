import React, { useState } from "react";
import AddIcon from "../../../assets/AddBankIcon.svg";
import backicon from "../../../../../Assets/backicon.svg";
import "../Card/CardModal/CardIndex";
import "../BankCards/BankCard.css";
import CardIndex from './CardModal/CardIndex';
import cardatm from "../../../assets/cardATM.svg";

const BankCards = () => {
  const [section, setSection] = useState(0);

  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        <a href="#CardModal">
          <div className="bank-details">
            <img src={AddIcon} alt="" className="bank-icon" />
            <p className="bank-text">Add cards</p>
          </div>
        </a>
{/* 
        <div className="atm-card">
            <img src={cardatm} alt="" className="mt-1" />
          </div> */}
      </div>

      <>
        <div id="CardModal" className="bankcard-modal">
          <div className="accountmodal-head">
            {section === 0 ? (
              <a href="#" className="backicon">
                <img src={backicon} alt="back icon" className="back-icon" />
              </a>
            ) : null}
            <CardIndex {...{ section, setSection }} />
          </div>
        </div>
      </>
    </div>
  );
};

export default BankCards;
