import React from 'react'
import './NoMatured.css'
import amico from '../../../assets/amico.svg'


const NoMatured = () => {
    return ( 
        <div>
        <div className="align-img">
            <img src={amico} alt="" className="nomatured-img"/>
        </div>
        <p className="nomatured">No Matured investments</p>
        <p className="no-maturedyet">You don’t have any matured investment. All your matu
        red investments will appear here</p>
        <button className="nomatured-button">Invest Now</button>
        </div>
    )
}

export default NoMatured
