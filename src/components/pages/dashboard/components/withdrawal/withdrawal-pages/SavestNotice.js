import React from "react";
import "./Withdrawal-pages.css";
// import successicon from "../../../../../Assets/success.svg";
import cardcloseicon from "../../../../../Assets/cardcloseicon.svg";
// import { StyledBankTransferFormButton } from "../../../../../Syles/styles.js";

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
        <div
          className=""
          style={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></div>
        <div className="notice-head">
          <h5>Quick Notices</h5>

          <p>
            A withdrawal fee of N200,00.00 would be deducted from your account,
            do you want to continue?
          </p>
        </div>

        <div className="decide-session">
          <p
            onClick={() => {
              setStage(1);
            }}
            className="No"
          >
            NO, cancel
          </p>
          <p
            onClick={() => {
              setStage(0);
            }}
            className="yes"
          >
            YES, continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPaymentSuccess;
