import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { hideModal } from "../../../../../../redux/actions/modal.action";
import closemodalicon from "../../../../../Assets/closemodalicon.svg";
import PortfolioIndex from "./PortfolioIndex";
import './PortfolioModal.css'

const PortfolioModal = () => {
  const [section, setSection] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="portfolio-page">
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
        <PortfolioIndex {...{ section, setSection }} />
      </div>
    </div>
  );
};

export default PortfolioModal;
