import React from "react";
import "./card.css";
import addcardicon from "../../../../../Assets/addnewbank.svg";
import plusicon from "../../../../../Assets/plus.svg";
import { StyledBankTransferFormButton } from "../../../../../Syles/styles";

const AddNewBankCard = ({ setStage }) => {
  return (
    <div className="addnewcard">
    <div className="" style={{
          marginTop: "40px",
          marginBottom: "23px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
      <div className="addnewcard-header">
        <h5>By Card</h5>
        <p>Fund your OVest wallet with your debit card.</p>
      </div>
      <div className="addnewcard-body">
        <p>
          Amount:
          <span> N500,000.00</span>
        </p>

        <div className="addcard">
          <img className="addcardicon" src={addcardicon} alt="add card icon" />
          <p>Add a new bank card</p>
          <img className="plus" src={plusicon} alt=" plus icon" />
        </div>
      </div>
      <StyledBankTransferFormButton
        type="submit"
        onClick={() => setStage(7)}
        style={{ marginTop: "100px" }}
      >
        Confirm
      </StyledBankTransferFormButton>
    </div>
    </div>
  );
};

export default AddNewBankCard;
