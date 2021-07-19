import React from "react";
import "./Transaction.css";
import DashboardLayout from "../../dashboardDefaultLayout/DashboardLayout";
import TransactionHistory from "./TransactionHistory";
import TransactionTab from "./TransactionTab/TransactionTab";

const Transaction = () => {
  return (
    <>
      <DashboardLayout>
        <main>
          <TransactionHistory />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TransactionTab />
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default Transaction;
