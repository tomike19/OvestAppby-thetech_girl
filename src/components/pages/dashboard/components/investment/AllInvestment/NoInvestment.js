import React from 'react'
import './NoInvestment.css'
import amico from '../../../assets/amico.svg'


const NoInvestment = () => {
    return ( 
        <div>
        <div className="align-img">
            <img src={amico} alt="" className="noinvestment-img"/>
        </div>
        <p className="noinvestment">No investment</p>
        <p className="no-investmentyet">You don’t have any investment. All your investments will appear here</p>
        <button className="noinvest-button">Invest Now</button>
    </div>
    )
}

export default NoInvestment
