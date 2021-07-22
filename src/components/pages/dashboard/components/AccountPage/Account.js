import React from "react";
import { connect } from "react-redux";
import { showModal } from "../../../../../redux/actions/modal.action";
import DashboardLayout from "../../dashboardDefaultLayout/DashboardLayout";
import PackageDetails from "../main/PackagesDetails";
import refer from "../../assets/refer.png";
import arrow from "../../assets/footer-arrow.png";
import apple from "../../assets/apple-btn.png";
import android from "../../assets/apple-btn.png";
import "./Account.css";
import Payment from "./Payment Option/Payment";
import Moden from "./Moden";
import AccountSettings from "./AccountSettings";
import Verfication from "./Verfication";
import FundsTransfer from "./FundsTransfer";
import AccountPortfolio from "./AccountPortfolio";
import BankCard from "./BankCard";
import BankCardsAccount from "./BankCards/BankCardsAccount";
import Support from "./Support";
import ReferralProgram from "./referralProgram";
import AboutOvest from "./AboutOvest";
import LegalAccount from "./Legal";
import { Link } from "react-router-dom";

const Account = ({ toggleModalAppearance }) => {
  const openModal = () => {
    toggleModalAppearance();
    console.log("open redux");
  };

  //Material-ui button styles ends//
  return (
    <DashboardLayout>
      <main>
        <div className="main-section">
          <div>
            <div className="account-page">
              <h1>My Account</h1>
              <p>Angela Daniel</p>
            </div>
            <div
              className="AccountPage"
              style={{
                marginTop: "39px",
              }}
            >
              <Payment />
              <Moden />
            </div>
            <AccountSettings />
            <Verfication />
            <FundsTransfer />
            <AccountPortfolio />
            <Link to="/dashboard/account/bankCardsAccount">
              <BankCard />
            </Link>
            <Support />
            <ReferralProgram />
            <AboutOvest />
            <LegalAccount />
          </div>
          <div className="refer-page">
            <PackageDetails
              style={{
                backgroundColor: "#eaf7f3",
                color: "#08990d",
              }}
              title={"Refer & Earn"}
              image={refer}
              body={"Get rewarded when friends signup & invest"}
              footer={"Refer a Friend"}
              footerIcon={arrow}
            />
            <div className="mobile-download mt-5 ">
              <p>Download the Mobile App</p>
              <div className="col-4">
                <img src={apple} alt="" srcSet="" />
                <img src={android} alt="" srcSet="" className="mt-3" />
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </main>
    </DashboardLayout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModalAppearance: () => dispatch(showModal()),
  // toggleWithdrawalModalAppearance: () => dispatch(showWithdrawalModal()),
});
export default connect(null, mapDispatchToProps)(Account);
