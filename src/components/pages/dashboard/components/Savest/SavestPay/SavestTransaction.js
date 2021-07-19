import React from 'react'
import './SavesTransaction.css'
import Tabs from "../SavestPay/Tabs";
// import TransactionCard from './Transactioncard';
// import Transactiondetails from './Transactiondetails'

const SavestTransaction = () => {
  return (
    <div>
      <div className="transactionSession">
        <div className="transactionTitle">
          <p>Savest Transactions</p>
          <span>View Earnings</span>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
          <Tabs />
          {/* <TransactionCard/> */}
        </div>
        {/* <Transactiondetails/> */}
      </div>
    </div>
  );
}

export default SavestTransaction
