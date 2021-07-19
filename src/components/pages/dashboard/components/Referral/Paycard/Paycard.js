import React from "react";
import Arrowup from "../../../assets/Arrowup.svg";
import PayDetails from "../PayDetails";
import "./Paycard.css";

const Paycard = () => {
  return (
    <div className="pay-session">
      <div className="paycardSession">
        <div>
          <p className="paytext">Payout</p>
        </div>
      </div>
      <div className="payDetails">
        <PayDetails
          icon={Arrowup}
          title={"Withdraw to Bank"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          style={{
            color: " #EE5253",
          }}
        />
        <PayDetails
          icon={Arrowup}
          title={"Withdraw to Bank"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          style={{ color: " #EE5253" }}
        />
        <PayDetails
          icon={Arrowup}
          title={"Withdraw to Bank"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          style={{ color: " #EE5253" }}
        />
        <PayDetails
          icon={Arrowup}
          title={"Withdraw to Bank"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          style={{ color: " #EE5253" }}
        />
      </div>
    </div>
  );
};

export default Paycard;
