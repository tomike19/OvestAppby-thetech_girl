import React, { useState } from "react";
import "./InvestmentTransaction.css";
import TransactionDetails from "../../main/TransactionDetails";
// import uppink from "../../../assets/Uppink.svg";
import upgreen from "../../../assets/upgreen.svg";
import downred from "../../../assets/downred.svg";
import backicon from "../../../../../Assets/backicon.svg";
import { InvestmentTransactionIndex } from "../transaction-modal/transactionIndex";


const InvestmentTransaction = () => {
  const [Transac, setTransac] = useState(0);

  return (
    <>
      <div className="deposit-main">
        <a
          href="#allTransactionModal"
          style={{
            cursor: "pointer",
          }}
        >
          <TransactionDetails
            icon={upgreen}
            title={"Silvest investment plan"}
            date={"Mar 30, 2021"}
            amount={"+ $10,000.00"}
            status={"Processed"}
            style={{ color: "#038830" }}
          />
        </a>

        <div className="hr"></div>
        <TransactionDetails
          icon={downred}
          title={"Goldvest plan investment"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
        <div className="hr"></div>
        <TransactionDetails
          icon={upgreen}
          title={"Silvest investment plan"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#038830" }}
        />
        <div className="hr"></div>
        <TransactionDetails
          icon={downred}
          title={"Goldvest plan investment"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
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

export default InvestmentTransaction;
