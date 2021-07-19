import React from "react";
import "./bank.css";
import copytoclipboard from "../../../../../Assets/acctcopy.svg";
// import Loader from "react-loader-spinner";

import {
  // StyledContainer,
  // StyledFormArea,
  // StyledLabel,
  // StyledTextInput,
  // StyledFormButton,
  // StyledTitle,
  // ButtonGroup,
  StyledBankTransferFormButton,
  // SubTitle,
  // ExtraText,
  // TextLink,
  // colors,
} from "../../../../../Syles/styles";
const BankTransfer = ({ setStage }) => {
  return (
    <div className="Bank-transfer">
      <div
        className=""
        style={{
          marginTop: "40px",
          marginBottom: "23px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="bank-transfer-header">
          <h5>By Bank Transfer</h5>
          <p>
            Fund your OVest wallet by sending money to the following account
            details
          </p>
        </div>

        <div className="account-information">
          <div className="">
            <p className="account-info">Account Information</p>
            <div className="account-details">
              <div className="account-details">
                <p>Wema Bank</p>
                <div className="accnumbercopy">
                  <p className="acct-number">123456789</p>
                  <img src={copytoclipboard} alt=" copy to clipboard" />
                </div>
                <p>OVest Global</p>
              </div>
            </div>
          </div>
        </div>

        {/* <button className="bank-transfer-btn" onClick={() => setStage(2)}>
        {" "}
        Yes, I have Paid
      </button> */}
        {/* <ButtonGroup> */}
        <StyledBankTransferFormButton
          type="submit"
          onClick={() => setStage(2)}
          style={{ marginTop: "90px" }}
        >
          Yes, I have Paid
        </StyledBankTransferFormButton>
        {/* </ButtonGroup> */}
      </div>
    </div>
  );
};

export default BankTransfer;
