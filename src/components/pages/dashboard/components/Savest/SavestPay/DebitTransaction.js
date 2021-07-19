import React from "react";
import Arrowup from "../../../assets/Arrowup.svg";
import "./Transctiondetails.css";
import "./DebitTransaction.css";
const Debitransaction = () => {
  return (
    <div>
      <div className="detailsSession">
        {/* <div> */}
        <div className="detailsPage">
          <div className="transDetails">
            <div>
              <img src={Arrowup} alt="" />
            </div>
            <div className="ml-4">
              <p className="detailsText">Savest deposit</p>
              <p className="detailsTexts">Mar 30, 2021</p>
            </div>
          </div>
          <div className="detailsCash">
            <p style={{ color: " #EE5253" }}>+ $10,000.00</p>
          </div>
        </div>
        <hr
          style={{
            width: 675,
            position: "relative",
            right: "40px",
            bottom: "5px",
          }}
        />
        {/* </div> */}
        <div>
          <div className="detailsPage">
            <div className="transDetails">
              <div>
                <img src={Arrowup} alt="" />
              </div>
              <div className="ml-4">
                <p className="detailsText">Withdraw to OVest wallet</p>
                <p className="detailsTexts">Mar 30, 2021</p>
              </div>
            </div>
            <div className="detailsCash">
              <p style={{ color: " #EE5253" }}>+ $10,000.00</p>
            </div>
          </div>
          <hr
            style={{
              width: 675,
              position: "relative",
              right: "40px",
              bottom: "5px",
            }}
          />
        </div>
        <div>
          <div className="detailsPage">
            <div className="transDetails">
              <div>
                <img src={Arrowup} alt="" className="mr-3" />
              </div>
              <div className="ml-2">
                <p className="detailsText">Savest deposit</p>
                <p className="detailsTexts">Mar 30, 2021</p>
              </div>
            </div>
            <div className="detailsCash">
              <p style={{ color: " #EE5253" }}>+ $10,000.00</p>
            </div>
          </div>
          <hr
            style={{
              width: 675,
              position: "relative",
              right: "40px",
            }}
          />
        </div>
        <div>
          <div className="detailsPage">
            <div className="transDetails">
              <div>
                <img src={Arrowup} alt="" />
              </div>
              <div className="ml-4">
                <p className="detailsText">Withdraw to OVest wallet</p>
                <p className="detailsTexts">Mar 30, 2021</p>
              </div>
            </div>
            <div className="detailsCash">
              <p style={{ color: " #EE5253" }}>+ $10,000.00</p>
            </div>
          </div>
          <hr
            style={{
              width: 675,
              position: "relative",
              right: "40px",
              height: " 1px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Debitransaction;
