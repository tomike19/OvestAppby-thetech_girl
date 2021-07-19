import React from 'react'
import Arrowright from "../../assets/Arrowright.svg";
import BankImage from "../../assets/Bankimage.svg";

const BankCard = () => {
  return (
    <div>
      <div className="Account-section">
        <div style={{ display: "flex" }}>
          <div>
            <img src={BankImage} alt="" className="imageAccount" />
          </div>
          <div>
            <p className="Account-text">Banks & Cards</p>
            <p className="account-paragraph">Set up your card & bank details</p>
          </div>
        </div>
        <div>
          <img src={Arrowright} alt="" className="arrow" />
        </div>
      </div>
    </div>
  );
}

export default BankCard
