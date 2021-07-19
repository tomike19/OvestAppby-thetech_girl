import React from "react";
import ReferralWithdraw from "../ReferralWithdraw/ReferralWithdraw";

const ReferralIndex = ({ section, setSection }) => {
  let CurrentPage;
  switch (section) {
    case 0:
      CurrentPage = <ReferralWithdraw setSection={ setSection}/>
      break;
  }
  return <div>{CurrentPage}</div>;
};

export default ReferralIndex;
