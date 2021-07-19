import React from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Main from "../components/main/Main";
// import Navbar from "../components/navbar/Navbar";
// import Sidebar from "../components/sidebar/Sidebar";
import Savest from "../components/Savest/savest";
import Referral from "../components/Referral/ReferralSection";
import Transaction from "../../dashboard/components/Transaction/Transaction";
import Investment from "../../dashboard/components/investment/Investment";
import Account from "../components/AccountPage/Account";
import BankCardsAccount from "../components/AccountPage/BankCards/BankCardsAccount";
const DashBoardRoute = ({ sidebarOpen, openSidebar, closeSidebar }) => {
  let match = useRouteMatch();

  return (
    <>
      {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> */}

      <Switch>
        {/* <Route path="/" exact component={Main} /> */}

        <Route path={match.path} exact component={Main} />
        <Route path={`${match.path}/invest`} exact component={Investment} />
        <Route path={`${match.path}/savest`} exact component={Savest} />
        <Route
          path={`${match.path}/transaction`}
          exact
          component={Transaction}
        />
        <Route path={`${match.path}/referral`} exact component={Referral} />

        <Route path={`${match.path}/account`} exact component={Account} />
        <Route path={`${match.path}/bankCardsAccount`} exact component={BankCardsAccount} />
      </Switch>

      {/* <Sidebar {...{sidebarOpen, closeSidebar, match}} /> */}
    </>
  );
};

export default DashBoardRoute;
