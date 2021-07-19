import React from "react";
import "./card.css";
import successicon from "../../../../../Assets/success.svg";
import cardcloseicon from "../../../../../Assets/cardcloseicon.svg";
import { StyledBankTransferFormButton } from "../../../../../Syles/styles.js";

const CardPaymentSuccess = ({ setStage }) => {
  return (
    <div className="cardpaymentsuccess">
      <div className="cardsuccesswrapper">
        <button
          className="closemodaliconsucess-btn"
          onClick={() => {
            setStage(0);
          }}
        >
          <img
            className="cardcloseicon "
            src={cardcloseicon}
            alt="card close icon"
          />
        </button>

        <img src={successicon} alt="" />

        <p>
          You have successfully fund your wallet with <span>N50,000,000.</span>
        </p>
        <StyledBankTransferFormButton
          type="submit"
          onClick={() => {
            setStage(0);
          }}
          style={{
            marginLeft: "135px",
            width: "150px",
          }}
        >
          Continue
        </StyledBankTransferFormButton>
      </div>
    </div>
  );
};

export default CardPaymentSuccess;
