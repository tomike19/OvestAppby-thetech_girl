import React from 'react'
import backicon from "../../../../../../../Assets/backicon.svg";
import MaturedInvestmentSilvest from './MaturedInvestmentSilvest';
import MaturedEarnings from './MaturedEarnings'




const MaturedInvestmentIndex = ({page , setPage}) => {
    let currentPage;
 switch (page){
     case 0:
         currentPage = <MaturedInvestmentSilvest setPage={setPage}  />
         break;

         case 1:
      currentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
                setPage(0)
              }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <MaturedEarnings setPage={setPage} />
        </>
        );
        break;
      
 }

    return (
        <div className="current-stage">
            {currentPage}
        </div>
    )
}

export default MaturedInvestmentIndex;
