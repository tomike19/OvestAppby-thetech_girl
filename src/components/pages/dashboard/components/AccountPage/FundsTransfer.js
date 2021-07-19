import React from 'react'
import Arrowright from "../../assets/Arrowright.svg";
import FundsImage from "../../assets/FundsImage.svg";



const FundsTransfer = () => {
  return (
    <div>
      <div className="Account-section">
        <div style={{ display: "flex" }}>
          <div>
            <img src={FundsImage} alt="" className="imageAccount" />
          </div>
          <div>
            <p className="Account-text">Funds Transfer</p>
            <p className="account-paragraph">
              Transfer funds to another OVestor
            </p>
          </div>
        </div>
        <div>
          <img src={Arrowright} alt="" className="arrow" />
        </div>
      </div>
    </div>
  );
}

export default FundsTransfer
