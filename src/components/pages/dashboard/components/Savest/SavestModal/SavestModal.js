import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { hideModal } from "../../../../../../redux/actions/modal.action";
import "./SavestModal.css";
import closemodalicon from "../../../../../Assets/closemodalicon.svg";
import SavestIndex from "./SavestIndex";
const SavestModal = () => {
  const [section, setSection] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="savestPages">
        <div className="">
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
          <SavestIndex {...{ section, setSection }} />
        </div>
      </div>
    </div>
  );
};
export default SavestModal;
