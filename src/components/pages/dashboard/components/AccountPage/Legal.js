import React,{useState} from "react";
import Arrowright from "../../assets/Arrowright.svg";
import Legal from "../../assets/Legal.svg";
import backicon from "../../../../Assets/backicon.svg";

import LegalIndex from "./LegalModal/LegalIndex";

const LegalAccount = () => {
  const [section, setSection] = useState(0);

  return (
    <div>
      <a href="#legalModal">
        <div className="Account-section">
          <div style={{ display: "flex" }}>
            <div>
              <img src={Legal} alt="" className="imageAccount" />
            </div>
            <div>
              <p className="Account-text">Legal</p>
              <p className="account-paragraph">Terms & Conditions</p>
            </div>
          </div>
          <div>
            <img src={Arrowright} alt="" className="arrow" />
          </div>
        </div>
      </a>

      <>
        <div id="legalModal" className="legal-modal">
          <div className="accountmodal-head">
            {section === 0 ? (
              <a href="#" className="backicon">
                <img src={backicon} alt="back icon" className="back-icon" />
              </a>
            ) : null}
            <LegalIndex {...{ section, setSection }} />
          </div>
        </div>
      </>
    </div>
  );
};

export default LegalAccount;
