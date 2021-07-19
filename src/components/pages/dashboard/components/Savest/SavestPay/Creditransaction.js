import React from "react";
import Arrowdown from "../../../assets/Arrrowdown.svg";
import "./Transctiondetails.css";

const Creditransaction = () => {
  return (
    <div>
      <div className="detailsSession">
        {/* <div> */}
        <div className="detailsPage">
          <div className="transDetails">
            <div>
              <img src={Arrowdown} alt="" />
            </div>
            <div className="ml-4">
              <p className="detailsText">Savest deposit</p>
              <p className="detailsTexts">Mar 30, 2021</p>
            </div>
          </div>
          <div className="detailsCash">
            <p style={{ color: "#038830" }}>+ $10,000.00</p>
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
                <img src={Arrowdown} alt="" />
              </div>
              <div className="ml-4">
                <p className="detailsText">Withdraw to OVest wallet</p>
                <p className="detailsTexts">Mar 30, 2021</p>
              </div>
            </div>
            <div className="detailsCash">
              <p style={{ color: "#038830" }}>+ $10,000.00</p>
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
                <img src={Arrowdown} alt="" className="ml-2" />
              </div>
              <div className="ml-2">
                <p className="detailsText">Savest deposit</p>
                <p className="detailsTexts">Mar 30, 2021</p>
              </div>
            </div>
            <div className="detailsCash">
              <p style={{ color: "#038830" }}>+ $10,000.00</p>
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
                <img src={Arrowdown} alt="" />
              </div>
              <div className="ml-4">
                <p className="detailsText">Withdraw to OVest wallet</p>
                <p className="detailsTexts">Mar 30, 2021</p>
              </div>
            </div>
            <div className="detailsCash">
              <p style={{ color: "#038830" }}>+ $10,000.00</p>
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

export default Creditransaction;
