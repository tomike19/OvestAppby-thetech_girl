import React from 'react'
import support from "../../assets/support.svg";
import Arrowright from "../../assets/Arrowright.svg";

const Support = () => {
  return (
    <div>
      <div className="Account-section">
        <div style={{ display: "flex" }}>
          <div>
            <img src={support} alt="" className="imageAccount" />
          </div>
          <div>
            <p className="Account-text">Support</p>
            <p className="account-paragraph">Chat with OVest support</p>
          </div>
        </div>
        <div>
          <img src={Arrowright} alt="" className="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Support
