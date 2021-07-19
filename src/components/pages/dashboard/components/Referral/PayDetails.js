import React from "react";
import "../Referral/PayDetails";
import "./PayDetails.css";
function PayDetails({ icon, title, date, amount, style }) {
  return (
    <div>
      <div className="payDetailsD">
        <div className="payDetailsD-left">
          <img src={icon} alt=""  className="payimage"/>
          <div className="">
            <p className="referral-title">{title}</p>
            <p className="date">{date}</p>
          </div>
        </div>
        <div className="payDetailsD-right">
          <p className="referral-amount" style={style}>
            {amount}
          </p>
        </div>
        {/* <div className="hr"></div> */}
      </div>
        <hr/>
    </div>
  );
}

export default PayDetails;
