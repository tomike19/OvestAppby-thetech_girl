import React,{useState} from "react";
import Mark from "../../assets/mark.svg";
import Arrowright from "../../assets/Arrowright.svg";
import VerificationIndex from "./VerificationModal/VerificationIndex";
import backicon from "../../../../Assets/backicon.svg";

const Verfication = () =>
{
  const [section, setSection] = useState(0);
  
  return (
    <div>
      <a href="#VerificationModal">
        <div className="Account-section">
          <div style={{ display: "flex" }}>
            <div>
              <img src={Mark} alt="" className="imageAccount" />
            </div>
            <div>
              <p className="Account-text">Verification</p>
              <p className="account-paragraph">Verify your identity</p>
            </div>
          </div>
          <div>
            <img src={Arrowright} alt="" className="arrow" />
          </div>
        </div>
      </a>

      <>
        <div id="VerificationModal" className="verification-modal">
          <div className="accountmodal-head">
            {section === 0 ? (
              <a href="#" className="backicon">
                <img src={backicon} alt="back icon" className="back-icon" />
              </a>
            ) : null}
            <VerificationIndex {...{ section, setSection }} />
          </div>
        </div>
      </>
    </div>
  );
};

export default Verfication;
