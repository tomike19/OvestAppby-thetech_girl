import React from 'react';
import './SavestSavingsSummary.css'
 
const SavestSavingsSummary = () => {
  return (
    <div className="savings-details">
       <div className="savest-payment">
          <h6>
            Save Now
          </h6>
           <p>
            Save strictly for your goals and earn 10% interest
            <br /> rate every 30 days
        </p>
        </div>
        <div>
        <div className="savings-summary">
          <p className="summary-text">Saving Summary</p>
          <div className="summary-section">
            <div className="summaryText">
            <p>
            Target Amount:
              </p>
              <p>
           Periodic Savings:
            </p>
            <p>
          Start Date:
            </p>
            <p>
           Maturity Date:
            </p>
            <p>
           Saving  Frequency:
            </p>
            <p>
           Interest Rate:
            </p>
            <p>
          Return Value:
        
            </p>
            <p>
       Duration:
              </p>
           </div>
            <div className="summary-transaction">
              <p style={{
                color: "#0768F6",
              }}>N50,000.00</p>
              <p>N500.00</p>
              <p>10 Apr, 2021</p>
              <p>10 Jun, 2021</p>
              <p style={{
                PaddingLeft:"40px"
              }}>Weekly</p>
              <p style={{
                color:"#0768F6",
              }}>10% monthly</p>
              <p>N20,000</p>
              <p>3 months</p>
          </div>
          </div>
          <hr style={{
            width:"390px",
          }}/>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.8rem",
          fontFamily: "Inter",
           fontStyle: "normal",
            fontWeight: "600",
          //  paddingRight: "23px",
          }}>
            <p>Total Payout:</p>
            <p style={{
              color:"#0768F6",
            }}>N70,000</p>
          </div>
        </div>
        <div>
          <div className="summary-note">
            <p><span style={{
              color: "#FD740E",
               fontWeight: 600,
            }}>Note:</span>10% interest is subject to limiting withdrawals to once a month. Withdrawing more than once a month forfeit interest for the month. Withdrawals from Savest can only be made every 15th and 30th day of every month.</p>
          </div>
          <input type="checkbox" name="terms" value="Boat" checked/>
  <label for="checkbox" className="summary-label"> By clicking this, you’ve agreed to <span style={{color:" #FD740E"}}>OVest terms and conditions</span></label>
        </div>
        <button
            type="submit"
          className="payment-button"
          >
            Proceed
          </button>
        </div>
    </div>
  );
}
 
 
export default  SavestSavingsSummary;