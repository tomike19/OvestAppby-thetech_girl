import React from 'react'
import './SpecialPackage.css'

const SpecialInvestDetails = ({setPage}) => {
    return (
        <div>
             <div className="silvestinvestment">
      <div className="silvestinvestment-body">
          <div className="silvestinvestment-main">
          <h5 className="silvestinvestment-h5">Special Invesment Details</h5>
          {/* <hr/> */}
        <p className="silvestinvestment-p mt-4">Description</p>
        <p className="silvestinvestment-textbody sp-span">Invest half the cost and you own a 
        land in any of our OHouse Estate. With a one-time capital 
        investment, you are 6 months away from becoming a land owner in either <span>Abuja, 
        Ibadan or Ekiti.</span></p>
      </div>
      <p className="benefits mt-5">Benefits of Investing in LandVest (OHouse)</p>
      <div className="silvest-flexbody">
        <div className="minimum-pricebody">
            <p className="ownership-p">Dry Land - 450sqm 
                with Perfect Layout</p>
        </div>
        <div className="durationbody">
            <p className="ownership-p">Start Building immediately after 6 months</p>
        </div>
      </div>
      <div className="silvest-flexbody2">
        <div className="minimum-pricebody">
            <p className="ownership-p">Own land with 1/2 or 1/3 payment with LandVest</p>
        </div>
        <div className="durationbody">
            <p className="ownership-p">Modern designs ( penthouse & dupllex )</p>
        </div>
      </div>
      <div className="silvest-flexbody2">
        <div className="silvest-flexbody2 mt-3">
        <div className="minimum-pricebody">
            <p className="ownership-p">Easy transfer of ownership</p>
        </div>
        <div className="durationbody">
            <p className="ownership-p">Ownership authentication guaranteed</p>
        </div>
        </div>
      </div>
      <div className="note-main">
          <p className="note cash-payout">Note: There is no cash payout in LandVest investment 
          (OHouse Estate), interest and capital would be used in becoming a Land-Owner</p>
      </div>
      <div className="checkbox-main">
            <input type="checkbox" name="" id="" className="checkbox-input" />
            <label htmlFor="" className="termsandcondition">By clicking this, you’ve agreed to 
            <span> OVest terms and conditions</span></label>
        </div>
      <button className="invest" onClick={() => setPage(1)}>Invest</button>
          </div>
        </div>
        </div>
    )
}

export default SpecialInvestDetails
