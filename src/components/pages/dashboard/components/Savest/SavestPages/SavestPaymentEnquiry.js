import React from "react";
import "./SavestPaymentEnquiry.css";

const SavestPaymentEnquiry = ({ setSection }) => {
  return (
    <>
      <div className="enquiry-session">
        <div className="savest-payment">
          <h6>Save Now</h6>
          <p>
            Save strictly for your goals and earn 10% interest
            <br /> rate every 30 days
          </p>
        </div>
        <div>
          <div>
            <form>
              <div>
                <label className="label-input">
                  How much would you like to save ?{" "}
                </label>
                <br />
                <input type="text" className="form-input" placeholder="NGN" />
              </div>
              <div
                style={{
                  marginTop: "15px",
                }}
              >
                <label className="label-input">
                  What is your target amount?{" "}
                </label>
                <br />
                <input type="text" className="form-input" placeholder="NGN" />
              </div>
            </form>

            <div className="Enquiry-session">
              <p>Do you wish to automate your savings?</p>
              <div>
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                 {" "}
                <label className="enquiry-label">
                  Yes, I will like to be debited automatically
                </label>
                <br></br>
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                 {" "}
                <label className="enquiry-label">
                  No, I will like to save whenever I want
                </label>
              </div>
            </div>
            <div className="Enquiry-session">
              <p>How often would you like to save?</p>
              <div>
                <input type="radio" id="html" name="Enquiry" value="HTML" /> {" "}
                <label className="enquiry-label">Daily</label>
                <br></br>
                <input
                  type="radio"
                  id="daily"
                  name=""
                  value="HTML"
                />  <label className="enquiry-label">Once a week</label>
              </div>
            </div>
            <div className="payment-section">
              <p>Payment date</p>
              <select className="selection">
                <option value="" key="" className="payment-selection">
                  Monday
                </option>
                <option value="" key="">
                  Tuesday
                </option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="payment-button"
            onClick={() =>
              setSection(1)
            }
          >
            Proceed
          </button>
        </div>
      </div>
    </>
  );
};

export default SavestPaymentEnquiry;
