import React from "react";
import "./founder.css";
import David from "../Assets/David.jpg";

const Founder = () => {
  return (
    <div class="founder-session">
      <div className="founder-hero">
        <h2 class="founder-header">Our Founder</h2>
        <div class="founder-details">
          <div class="founder-image">
            <img src={David} alt="" />
          </div>
          <div class="founder-text">
            <h6>David Oladejo</h6>
            <p class="header-paragraph">Founder & CEO OSource Empire</p>
            <div class="founder-detailsText">
              <p>
                There are no words to describe how excited I fulfiled I am with
                what we are doing at OVest. The true desire to enrich live is
                perfectly excercised with OVest adding value in one of the most
                crucial aspect of live - Finance. I and the Team at OVest are
                super-excited to be the channel to help you achieve the
                Millionare and Billonaire milestone.
              </p>
              <p>
                OVest was created as a stem of the OYESource Empire vision by
                Davidollad, the Founder, CEO OYESource Empire to enrich you
                financially.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
