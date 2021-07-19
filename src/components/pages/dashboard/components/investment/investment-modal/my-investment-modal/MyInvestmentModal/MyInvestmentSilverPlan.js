import React from 'react'
import './MyInvestmentModal.css'
import dots from '../../../../../assets/dots.svg'
import angelaicon from '../../../../../assets/angelaicon.svg'

const MyInvestmentSilverPlan = ({setPage}) => {
    return (
        <div className="myinvestmentbody">
            <div className="myinvestment-main">
                <div className="header-flex">
                <h5 className="silvestinvestment-h5">Silvest Invesment Plan</h5>
                <div onClick={() => setPage(1)} className="dots-main">
                <img src={dots} alt=""  className="dots-img" />
                </div>
                </div>
                <div>
                    <img src={angelaicon} alt=""/>
                </div>
                <div className="totalreturn-card mt-5">
               <div className="totalreturn-body">
                    <p className="totalreturn-head">Total Balance</p>
                    <p className="totalreturn-amount">50,000</p>
                    <p className="totalreturn-mini">15% portfoilo change today</p>
                    <p className="amountreturned">Total Returns:</p>
                    <p className="main-amount">N15,000</p>
                   </div>   
             </div>
             <p className="countdown-p mt-3">Countdown: <span>3days</span></p>
             <div className="silverplan">
        <h5 className="silverplan-header">Silvest Investment Plan</h5>
        <div className="silverplan-flex">
            <div className="investamount">
            <p className="flex-main">Investment Amount:</p>
            <p className="pricetag">N50,000.00</p>
            </div>
            <div className="investamount">
            <p className="flex-main">Duration:</p>
            <p className="flex-mini">3 Months</p>
            </div>
            <div className="investamount">
            <p className="flex-main">Start Date:</p>
            <p className="flex-mini">10 Apr, 2021</p>
            </div>
            <div className="investamount">
            <p className="flex-main">Maturity Date:</p>
            <p className="flex-mini">10 Jun, 2021</p>
            </div>
            <div className="investamount">
            <p className="flex-main">Interest Rate:</p>
            <p className="pricetag">50% P/A</p>
            </div>
            <div className="investamount">
            <p className="flex-main">Status:</p>
            <p className="matured-status">Not Matured</p>
            </div>
            <div className="investamount">
            <p className="flex-mini">Total Payout:</p>
            <p className="pricetag-mini">N70,000</p>
            </div>
        </div>
        </div>
        <div className="totalreturn-note">
          <p className="little-note">Your Silvest Investment plan has been closed and deposited in your wallet for withdrawal or reinvestment.</p>
      </div>
            </div>
        </div>
    )
}

export default MyInvestmentSilverPlan
