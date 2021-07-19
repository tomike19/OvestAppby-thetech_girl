import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-section">
      <div className="portfolio-header">
        <h1>Portfolio</h1>
      </div>
      <div className="portfolioColors">
        <div className="portfolio-blue">
          <p>24%</p>
        </div>
        <div className="portfolio-darkBlue">
          <p>35%</p>
        </div>
        <div className="portfolioBlue">
          <p>41%</p>
        </div>
      </div>
      <div className="portfolio-savest">
        <div className="portfolio-text">
          <div className="wallets"></div>
          <p className="ml-3">Wallet</p>
        </div>
        <div className="portfolio-text ml-4">
          <div className="savest-color"></div>
          <p className="ml-3">Savest</p>
        </div>
        <div className="portfolio-text ml-4">
          <div className="invest-color"></div>
          <p className="ml-3">Invest</p>
        </div>
      </div>
      <div className="summarySection">
        <p className="summary-header">Portfolio Summary</p>
        <p className="summaryHeader">Wallet</p>
        <div className="summary-details">
          <div className="portfolio-summary">
            <p>Total wallet balance</p>
            <p>N0.00</p>
          </div>
        </div>

        <p className="summaryHeader">Savings</p>
        <div className="portfolio-summary">
          <div className="summary-details">
            <p>Total savings balance</p>
            <p className="mt-2">Current returns</p>
          </div>
          <div className="summary-details">
            <p>N0.00</p>
            <p className="mt-2">N0.00</p>
          </div>
        </div>
        <p className="summaryHeader">Investment</p>
        <div className="portfolio-summary">
          <div className="summary-details">
            <p>Total investment balance</p>
            <p className="mt-2">Current returns</p>
          </div>
          <div className="summary-detailss">
            <p>N0.00</p>
            <p className="mt-2 mb-5">N0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
