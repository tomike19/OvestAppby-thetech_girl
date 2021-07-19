import React from "react";
import DashboardLayout from "../../dashboardDefaultLayout/DashboardLayout";
import Referral from "./Referral";
import ReferralCard from "./ReferralCard";
import Paycard from "./Paycard/Paycard";
import Referralcode from "./Referralcode";
const ReferralSection = () => {
  return (
    <DashboardLayout>
      <main>
        <div>
          <Referral />
          <ReferralCard />
          <div
            style={{
              display: "flex",
              justifyContent:"space-between"
            }}
          >
            <Paycard />
            <Referralcode />
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default ReferralSection;
