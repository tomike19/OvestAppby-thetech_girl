import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { hideModal } from "../../../../../../redux/actions/modal.action";
import closemodalicon from "../../../../../Assets/closemodalicon.svg";
import LegalIndex from "./LegalIndex";

const LegalModal = () => {
  const [section, setSection] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="legal-page">
        {section === 0 ? (
          <button
            className="closemodalicon-btn"
            onClick={() => {
              setSection(0);
              dispatch(hideModal());
            }}
          >
            <img src={closemodalicon} alt="" className="closemodal" />
          </button>
        ) : null}
        <LegalIndex {...{ section, setSection }} />
      </div>
    </div>
  );
};

export default LegalModal;
