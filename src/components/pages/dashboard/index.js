import React from "react";
import { useSelector } from "react-redux";

import "./dashboardIndex.css";
import FundWallet from "./components/fundwallet/FundWallet";
import "./dashboardIndex.css";
import DashBoardRoute from "./dashboardRoute/DashBoardRoute";
import {
  showModalState,
  showWithdrawalModalState,
} from "../../../redux/selectors/modal.selector";
import Withdrawal from "./components/withdrawal/Withdrawal";
import { useUser } from "../../../hooks/use-user";

const Dashboard = () => {
  // const [sidebarOpen, setsidebarOpen] = useState(false);
  const showModal = useSelector(showModalState);
  const showWithdrawalModal = useSelector(showWithdrawalModalState);
  const user = useUser();

  if (!user) {
    return null;
  }

  const isUnVerified = !user.email_verified_at;
  if (isUnVerified) {
    const {
      location: { host, protocol, href },
    } = window;
    const base = `${protocol}//${host}`;
    const continueTo = `?continue_to=${encodeURIComponent(href)}`;
    window.location = `${base}/signupverify${continueTo}`;

    return null;
  }

  return (
    <div className="contain">
      <div
        className="blurEffect"
        style={{ display: showModal ? "block" : "none" }}
      >
        <FundWallet />
      </div>
      <div
        className="blurEffect"
        style={{ display: showWithdrawalModal ? "block" : "none" }}
      >
        <Withdrawal />
      </div>

      {/* <div className="blurEffect" style={{ display: "block" }}>
          <InvestModal />
        </div> */}

      <DashBoardRoute />
      {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />

      <Main />

      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} /> */}
    </div>
  );
};

export default Dashboard;
