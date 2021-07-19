import React, { useState } from "react";
import "./WithdrawalTransaction.css";
import TransactionDetails from "../../main/TransactionDetails";
// import uppink from "../../../assets/Uppink.svg";
// import upgreen from "../../../assets/upgreen.svg";
import downred from "../../../assets/downred.svg";
import backicon from "../../../../../Assets/backicon.svg";
import { InvestmentTransactionIndex } from "../transaction-modal/transactionIndex";
const Withdrawals = () => {
  const [Transac, setTransac] = useState(0);

  return (
    <>
      <div>
        <a
          href="#allTransactionModal"
          style={{
            cursor: "pointer",
          }}
        >
          <TransactionDetails
            icon={downred}
            title={"Goldvest plan investment"}
            date={"Mar 30, 2021"}
            amount={"- $10,000.00"}
            status={"Processed"}
            style={{ color: "#ee5253" }}
          />
        </a>
        <div className="hr"></div>
        <TransactionDetails
          icon={downred}
          title={"Silvest plan investment"}
          date={"Mar 30, 2021"}
          amount={"- $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
        <div className="hr"></div>
        <TransactionDetails
          icon={downred}
          title={"OVestor Fund Transfer"}
          date={"Mar 30, 2021"}
          amount={"- $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
        <div className="hr"></div>
        <TransactionDetails
          icon={downred}
          title={"Withdraw to Ovest Wallet"}
          date={"Mar 30, 2021"}
          amount={"- $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
        <div className="hr"></div>
        <TransactionDetails
          icon={downred}
          title={"Withdraw to Bank"}
          date={"Mar 30, 2021"}
          amount={"- $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
        <div className="hr"></div>
        <TransactionDetails
          icon={downred}
          title={"Silvest plan investment"}
          date={"Mar 30, 2021"}
          amount={"- $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
        <div className="hr"></div>
        <TransactionDetails
          icon={downred}
          title={"Goldvest plan investment  "}
          date={"Mar 30, 2021"}
          amount={"- $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
        <div className="hr"></div>
      </div>

      <div id="allTransactionModal" className="allTransactionModal">
        <div className="alltransaction-head">
          {Transac === 0 ? (
            <a
              href="#"
              className="closemodalicon-btn"
              onClick={() => {
                setTransac(0);
              }}
            >
              <img src={backicon} alt="" className="closemodal" />
            </a>
          ) : null}

          <InvestmentTransactionIndex {...{ Transac, setTransac }} />
        </div>
      </div>
    </>
  );
};

export default Withdrawals;
