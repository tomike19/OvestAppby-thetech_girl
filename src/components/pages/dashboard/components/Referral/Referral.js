import React, { useState } from "react";
import "./Referral.css";
import { connect } from "react-redux";
import { showModal } from "../../../../../redux/actions/modal.action";
import closemodalicon from "../../../../Assets/closemodalicon.svg";
import ReferralIndex from "../Referral/ReferralModal/ReferralIndex";

const Referral = ({ toggleModalAppearance }) => {
  const [section, setSection] = useState(0);

  const openModal = () => {
    toggleModalAppearance();
    console.log("open redux");
  };
  // const { user } = useAuth();
  return (
    <>
      <div className="referral-section">
        <div>
          <p className="referral-text">Referrals</p>
          <p className="referral-paragraph">
            These are all your previous transactions
          </p>
        </div>
        <div>
          <a href="#referalModal">
            <button
              // onClick={openModal}
              className="withdraw-button"
            >
              Withdraw Earnings
            </button>
          </a>
        </div>
      </div>

      <>
        <div id="referalModal" className="referral-modal">
          <div className="referralmodal-head">
            {section === 0 ? (
              <a href="#" className="closemodalicon-btn">
                <img
                  src={closemodalicon}
                  alt="close modal"
                  className="closemodal"
                />
              </a>
            ) : null}
            <ReferralIndex {...{ section, setSection }} />
          </div>
        </div>
      </>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModalAppearance: () => dispatch(showModal()),
  // toggleWithdrawalModalAppearance: () => dispatch(showWithdrawalModal()),
});
export default connect(null, mapDispatchToProps)(Referral);
