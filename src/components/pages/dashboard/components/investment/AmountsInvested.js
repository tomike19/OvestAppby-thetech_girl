import React from 'react'
import './AmountsInvested.css'
import Graph from '../../assets/Graph.png'
import Vector from '../../assets/Vector.svg'
import Vector2 from '../../assets/Vector2.svg'


const AmountsInvested = () => {
    return (
        <div className="amounts-invested">
               <div className="amountsinvested-card">
                   <div className="totalinvestment">
                   <div  className="icon1">
                   <img src={Graph} alt="" className="icon-image"/>
                   </div>
                    <p className="card-tit">Total Amount Invested</p>
                    <p className="amount">$50,000.00</p>
                   </div>   
        </div>

        <div className="amountsinvested-card">
        <div className="totalinvestment">
                   <div  className="icon1">
                   <img src={Vector} alt="" className="icon-image"/>
                   </div>
                    <p className="card-tit">Total Investment Packages</p>
                    <p className="amount">4</p>
                   </div>   
        </div> 

        <div className="amountsinvested-card">
        <div className="totalinvestment">
                   <div  className="icon1">
                   <img src={Vector2} alt="" className="icon-image"/>
                   </div>
                    <p className="card-tit">Total Returns</p>
                    <p className="amount">$0.00</p>
                    <p className="mini-amount">0.0% portfoilo change today</p>
                   </div>   
        </div>
        </div>
    )
}

export default AmountsInvested
