import React from 'react';
import "./SavestEnquiries.css"

const SavestEnquiries = ({setSection}) => {
  return (
    <>
      <div className="savestenquiry-session">
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
          <form>
            <div>
              <label className="label-input">
                When would you like to start saving?{" "}
              </label><br />
              <input type="text" className="form-input" placeholder="DD/MM/YYYY" />
            </div>
             <div
                style={{
                  marginTop: "15px",
                }}
              >
                <label className="label-input">
                  When would you like to end saving?{" "}
                </label>
                <br />
                <input type="text" className="form-input" placeholder="DD/MM/YYYY" />
              </div>
          </form>
        </div>
         <button
            type="submit"
          className="payment-button"
          onClick={() =>
          {
            setSection( 2 );
          }}
          >
            Proceed
          </button>
      </div>
    </>
  )
}

export default SavestEnquiries
