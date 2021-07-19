import React,{useState} from "react";
import Account1 from "../../assets/account1.svg";
import Arrowright from "../../assets/Arrowright.svg";
import "./Account.css";
import backicon from "../../../../Assets/backicon.svg";

import SettingsIndex from "../AccountPage/SettingsModal/SettingsIndex"; 

const AccountSettings = () =>
{
  const [section, setSection] = useState(0);
  
  return (
    <div>
      <a href="#settingsModal">
        <div className="Account-section">
          <div style={{ display: "flex" }}>
            <div>
              <img src={Account1} alt="" className="imageAccount" />
            </div>
            <div>
              <p className="Account-text">Account Settings</p>
              <p className="account-paragraph">Edit Profile</p>
            </div>
          </div>
          <div>
            <img src={Arrowright} alt="" className="arrow" />
          </div>
        </div>
      </a>

      <>
        <div id="settingsModal" className="settings-modal">
          <div className="accountmodal-head">
            {section === 0 ? (
              <a href="#" className="backicon">
                <img src={backicon} alt="back icon" className="back-icon" />
              </a>
            ) : null}
            <SettingsIndex {...{ section, setSection }} />
          </div>
        </div>
      </>
    </div>
  );
};

export default AccountSettings;
