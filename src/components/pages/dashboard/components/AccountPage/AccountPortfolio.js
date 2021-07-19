import React,{useState} from 'react'
import Portfolio from "../../assets/Portfolio.svg";
import Arrowright from "../../assets/Arrowright.svg";
import PortfolioIndex from './PortfolioModal/PortfolioIndex';
import backicon from "../../../../Assets/backicon.svg";

import './Account.css'


const AccountPortfolio = () =>
{
  const [section, setSection] = useState(0);
  
  return (
    <div>
      <a href="#portfolioModal">
        <div className="Account-section">
          <div style={{ display: "flex" }}>
            <div>
              <img src={Portfolio} alt="" className="imageAccount" />
            </div>
            <div>
              <p className="Account-text">Portfolio</p>
              <p className="account-paragraph">Breakdown of your finance</p>
            </div>
          </div>
          <div>
            <img src={Arrowright} alt="" className="arrow" />
          </div>
        </div>
      </a>

      <>
        <div id="portfolioModal" className="portfolio-modal">
          <div className="accountmodal-head">
            {section === 0 ? (
              <a href="#" className="backicon">
                <img src={backicon} alt="back icon" className="back-icon" />
              </a>
            ) : null}
            <PortfolioIndex {...{ section, setSection }} />
          </div>
        </div>
      </>
    </div>
  );
}

export default AccountPortfolio
