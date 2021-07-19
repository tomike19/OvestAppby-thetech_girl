import React, { useState } from "react";
import AddIcon from "../../../assets/AddBankIcon.svg";
// import closemodalicon from "../../../../../Assets/closemodalicon.svg";
import backicon from "../../../../../Assets/backicon.svg";

import CryptoIndex from "./CryptoModal/CryptoIndex";
import "../BankCards/BankCard.css";

const Crypto = () => {
  const [section, setSection] = useState(0);

  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        <a href="#CryptoModal">
          <div className="bank-details">
            <img src={AddIcon} alt="" className="bank-icon" />
            <p className="bank-text">Add crypto wallet</p>
          </div>
        </a>
        {/* <div className="details-nebbix">
          <div
            style={{
              marginTop: "40px",
            }}
          >
            <div className="crypto-details">
              <p>Coin host</p>
              <p>Wallet address</p>
            </div>
            <div className="crypto-details">
              <p
                style={{
                  fontWeight: "500",
                  color: "black",
                }}
              >
                Nebbix
              </p>
              <p
                style={{
                  fontWeight: "500",
                  color: "black",
                }}
              >
                3edn456mgkrfkl
              </p>
            </div>
          </div>
        </div> */}
      </div>

      <>
        <div id="CryptoModal" className="crypto-modal">
          <div className="accountmodal-head">
            {section === 0 ? (
              <a href="#" className="backicon">
                <img src={backicon} alt="back icon" className="back-icon" />
              </a>
            ) : null}
            <CryptoIndex {...{ section, setSection }} />
          </div>
        </div>
      </>
    </div>
  );
};

export default Crypto;
