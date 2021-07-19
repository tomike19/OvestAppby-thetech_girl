import React from "react";
import "./bank.css";
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
import successicon from "../../../../../Assets/success.svg";

const BankTransferSucces = ({ setStage }) => {
  return (
    <div
      className="banktranfersuccess"
      style={{
        marginLeft: "-400px",
        // position: "absolute",
      }}
    >
      <img src={successicon} alt=" success icon" />

      <p>
        Congrats! Your transaction is currently being processed. We'll let you
        know how it goes.
      </p>
      <StyledBankTransferFormButton
        style={{
          height: "52px",
          // marginLeft: "135px",
          width: "150px",
        }}
        onClick={() => {
          setStage(0);
        }}
      >
        okay
      </StyledBankTransferFormButton>
    </div>
  );
};

export default BankTransferSucces;
