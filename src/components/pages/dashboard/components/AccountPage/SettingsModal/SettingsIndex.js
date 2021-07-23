import React from "react";
import Settings from "./SettingsPage/Settings";
import Information from "./SettingsPage/Information";
import backicon from "../../../../../Assets/backicon.svg";
import PersonalNote from "./SettingsPage/PersonalNote";
import NextOfKin from "./SettingsPage/NextOfKin";
import Security from "./SettingsPage/Security";
const SettingsIndex = ({ section, setSection }) => {
  let CurrentPage;
  switch (section) {
    case 0:
      CurrentPage = <Settings setSection={setSection} />;
      break;

    case 1:
      CurrentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setSection(0);
            }}
          >
            <img src={backicon} alt="back icon" className="back-icon" />
            {/* <img src={info} alt="" /> */}
          </button>
          <Information setSection={setSection} />
        </>
      );
      break;

    case 2:
      CurrentPage = <PersonalNote setSection={setSection} />;
      break;

    case 3:
      CurrentPage = (
        <>
          <a
            href="#settingsModal"
            className="backicon"
            onClick={() => {
              setSection(0);
            }}
          >
            <img src={backicon} alt="back icon" className="back-icon" />
            {/* <img src={info} alt="" /> */}
          </a>
          <NextOfKin setSection={setSection} />
        </>
      );
      break;
    case 4:
      CurrentPage = (
        <>
          <button
            href="#settingsModal"
            className="backicon"
            onClick={() => {
              setSection(0);
            }}
          >
            <img src={backicon} alt="back icon" className="back-icon" />
            {/* <img src={info} alt="" /> */}
          </button>
          <Security setSection={setSection} />
        </>
      );
      break;
  }

  return <div className="current-page">{CurrentPage}</div>;
};

export default SettingsIndex;
