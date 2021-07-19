import React from 'react'
import './MyInvestmentModal.css'
import search from '../../../../../assets/Search.svg'

const Earning = ({setPage}) => {
    return (
        <div className="earning-body">
            <div className="myinvestment-main">
                <div className="earning-flex">
                <h5 className="earning-h5">Earning in Last 60 Days</h5>
                <img src={search} alt="" />
                </div>
                <p className="earning-p">View your investment earnings transaction</p>
                <div className="dateandearning mt-5">
                <div className="earning-flex">
                    <p className="date-p">Date</p>
                    <p className="date-p">Earnings</p>
                </div>
                <div className="earning-flex">
                    <p className="price-p">11 Apr, 2021</p>
                    <p className="price-p">N200</p>
                </div>
                <hr/>
                <div className="earning-flex">
                    <p className="date-p">Date</p>
                    <p className="date-p">Earnings</p>
                </div>
                <div className="earning-flex">
                    <p className="price-p">11 Apr, 2021</p>
                    <p className="price-p">N200</p>
                </div>
                <hr/> <div className="earning-flex">
                    <p className="date-p">Date</p>
                    <p className="date-p">Earnings</p>
                </div>
                <div className="earning-flex">
                    <p className="price-p">11 Apr, 2021</p>
                    <p className="price-p">N200</p>
                </div>
                <hr/> <div className="earning-flex">
                    <p className="date-p">Date</p>
                    <p className="date-p">Earnings</p>
                </div>
                <div className="earning-flex">
                    <p className="price-p">11 Apr, 2021</p>
                    <p className="price-p">N200</p>
                </div>
                <hr/> <div className="earning-flex">
                    <p className="date-p">Date</p>
                    <p className="date-p">Earnings</p>
                </div>
                <div className="earning-flex">
                    <p className="price-p">11 Apr, 2021</p>
                    <p className="price-p">N200</p>
                </div>
                <hr/> <div className="earning-flex">
                    <p className="date-p">Date</p>
                    <p className="date-p">Earnings</p>
                </div>
                <div className="earning-flex">
                    <p className="price-p">11 Apr, 2021</p>
                    <p className="price-p">N200</p>
                </div>
                <hr/>
                <div className="earning-flex">
                    <p className="date-p">Date</p>
                    <p className="date-p">Earnings</p>
                </div>
                <div className="earning-flex">
                    <p className="price-p">11 Apr, 2021</p>
                    <p className="price-p">N200</p>
                </div>
                <hr/> <div className="earning-flex">
                    <p className="date-p">Date</p>
                    <p className="date-p">Earnings</p>
                </div>
                <div className="earning-flex mb-5 ">
                    <p className="price-p">11 Apr, 2021</p>
                    <p className="price-p">N200</p>
                </div>
                <hr/>

                </div>
            </div>
        </div>
    )
}

export default Earning
