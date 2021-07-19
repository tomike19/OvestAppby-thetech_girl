import React from "react";
import DashboardLayout from "../../../dashboardDefaultLayout/DashboardLayout";
import Bankdetails from "./Bankdetails";
import BankTab from "./BankTab"

const BankCardsAccount = () => {
  return (
    <>
      <DashboardLayout>
        <main>
          <div>
            <Bankdetails />
            <BankTab/>
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

export default BankCardsAccount;
