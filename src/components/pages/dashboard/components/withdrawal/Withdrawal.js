import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { hideWithdrawalModal } from "../../../../../redux/actions/modal.action";
// import {CopyToClipboard} from 'react-copy-to-clipboard';
// import "./fundwallet.css";
// import FundWalletLogic from "../fundwallet/index";
// import backicon from "../../../../Assets/backicon.svg";
import "./withdrawal.css";
import closemodalicon from "../../../../Assets/closemodalicon.svg";
// import WithdrawalMethod from "./WithdrawalMethod";
import WithdrawalLogic from "./index";

const WithDrawal = ({ toggleModalAppearance }) => {
  const [stage, setStage] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="Fund-wallet-method withdrawheading ">
      <div
        className="Fund-wallet-method-head withdrawal-wallet-head"
        style={{
          overflowY: "auto",
        }}
      >
        <div style={{}}>
          {stage === 0 ? (
            <button
              className="closemodalicon-btn"
              onClick={() => {
                setStage(0);
                dispatch(hideWithdrawalModal());
              }}
            >
              <img
                className="closemodalicon"
                src={closemodalicon}
                alt="close modal"
              />
            </button>
          ) : null}

          <div className=""></div>
          {/* <FundWalletLogic {...{ stage, setStage }}  /> */}
          <WithdrawalLogic {...{ stage, setStage }} />
        </div>
      </div>
    </div>
  );
};

export default WithDrawal;
