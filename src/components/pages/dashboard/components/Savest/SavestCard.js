import React from "react";
import Savest from "../../assets/saveImg2.svg";
import Savest1 from "../../assets/savest.svg";
import createsavesticon from "../../assets/createsavesticon.svg"
import "./SavestCard.css";

const SavestCard = () => {
  return (
    <div className="savestSesson">
      <div className="savestCard">
        <div className="savestImage">
          <img src={Savest} alt="" className="saveImage" width="27px" />
        </div>
        <h6>Total Amount Saved</h6>
        <p>$0.00</p>
      </div>
      <div
        className="savestCard1
      "
      >
        <div className="savestImage">
          <img src={Savest1} alt="" className="saveImg" width="27px" />
        </div>
        <h6>Total Returns</h6>
        <p>$0.00</p>
        <span className="portfolioText">0.0% portfoilo change today</span>
      </div>
      <div className="saveCard">
        <div className="create-savest">
        <img src={createsavesticon} alt="create-savest-icon" className="create-savestimg"/>
        </div>
       <p className="create-savestplan">Create a New Savest Plan</p>
      </div>
    </div>
  );
};

export default SavestCard;
