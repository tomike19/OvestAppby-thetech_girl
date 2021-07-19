import React from "react";
import PackageDetails from "./PackagesDetails";
import investImg from "../../assets/invest-img.png";
import savestimg from "../../assets/savest-img.jpg";
import refer from "../../assets/refer.png";
import arrow from "../../assets/footer-arrow.png";

const PackageWrap = () => {
  return (
    <div style={{}}>
      <PackageDetails
        style={{
          color: "#fd740e",
        }}
        title={"Investments"}
        image={investImg}
        body={
          "Invest in low risk and earn up to 25% at the end of each 25/30 business days "
        }
      />
      <PackageDetails
        style={{
          color: "#281bb6",
        }}
        title={"Create a Savest plan"}
        image={savestimg}
        body={"Save as a tribe and earn up to 10% every 30 days"}
      />
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
    </div>
  );
};

export default PackageWrap;
