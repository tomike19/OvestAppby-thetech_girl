import React from 'react'
import './investment.css'
import DashboardLayout from '../../dashboardDefaultLayout/DashboardLayout'
import InvestmentHeader from './InvestmentHeader'
import AmountsInvested from './AmountsInvested'
import AllInvestment from './AllInvestment/AllInvestment'


const Investment = () => {
    return (
        <>
        <DashboardLayout>
            <main>
            <InvestmentHeader/>
            <AmountsInvested/>
            <div className="allnvestment">
            <AllInvestment/>
            </div>
            </main>
        </DashboardLayout>
        </>
    )
}

export default Investment
