import React from 'react'
import './NoTransaction.css'
import bro from '../../../assets/bro.svg'

const NoTransaction = () => {
    return (
        <div>
        <div className="align-img">
            <img src={bro} alt="" className="notransaction-img"/>
        </div>
        <p className="notransactions">No transactions yet</p>
        <p className="no-orders">You haven’t made any transaction yet. When you do, they will show here.</p>
    </div>
    )
}

export default NoTransaction
