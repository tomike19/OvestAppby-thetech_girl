import React, { useState } from "react";

import "./maincen.css";

import CompleteSetup from "./complete-setup/CompleteSetup";
import RecentTransaction from "./RecentTransaction/RecentTransaction";
//import TransactionChart from "./RecentTransaction/transactionchart/TransactionChart";
import NoRecentTransaction from "./no-recent-transaction/NoRecentTransaction";
import { $api } from "../../../../../helpers/$api";

function MainCenL() {
  const [transactions, setTransactions] = useState([]);

  useState(() => {
    (async () => {
      try {
        const transactions = await $api.user.getTransactions();

        setTransactions(transactions);
      } catch (error) {
        // error getting transactions
      }
    })();
  }, [setTransactions]);

  return (
    <div className="main-cen-l">
      <CompleteSetup />
      {transactions.length ? (
        <RecentTransaction transactions={transactions} />
      ) : (
        <NoRecentTransaction />
      )}
      {/* <TransactionChart /> */}
    </div>
  );
}

export default MainCenL;
