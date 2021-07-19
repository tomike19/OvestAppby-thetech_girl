import React from 'react'
import './SpecialPackage.css'
import backtick from '../../../../../assets/backtick.svg'

const SpecialPackageInvestNow = ({setPage}) => {
    return (
             <div className="startinvestment-body">
              <div className="startinvestment-main">
        <div className="confirminvestment-main">
        <h5 className="confirminvestment-h5"> Invest Now</h5>
      <p className="confirminvestment-textbody mt-2">Choose Payment Method</p>
      </div>
      <div className="silverplan">
        <p className="fundwith-header">Fund With</p>
        <hr className="hr"/>
        <div className="silverplan-flex">
            <div className="ovest-wallet">
            <p className="ovestwallet-main">Ovest Wallet</p>
            <div className="investamount">
              <div>
              <p className="investamount-balance mt-4">Balance: N0</p>
              {/* <p className="investamount-money mt-4">Balance: N20,000,000</p> */}
              </div>
            <p className="investamount-mini mb-2">Change this <span><img src={backtick} alt=""
             className="ml-2"/></span> </p>
            </div>
            <p className="funds-p mt-5">Insufficient funds. <span>Fund wallet</span></p>
            </div>
        </div>
        
        </div>
        <div className="note-main p-4">
          <p className="funds-deduction">Funds will be deducted automatically from your 
          available payment method(s) on OVest.</p>
            </div>
            <div className="checkbox-main">
            <input type="checkbox" name="" id="" className="checkbox-input" />
            <label htmlFor="" className="termsandcondition">By clicking this, you’ve agreed to 
            <span> OVest terms and conditions</span></label>
        </div>
        <button className="invest" onClick={() => setPage(4)}>Invest</button>
             </div>
        </div>
    )
}

export default SpecialPackageInvestNow
