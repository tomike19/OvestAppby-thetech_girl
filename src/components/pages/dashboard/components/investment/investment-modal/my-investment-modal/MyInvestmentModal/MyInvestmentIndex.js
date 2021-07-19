import React from 'react'
import MyInvestmentSilverPlan from './MyInvestmentSilverPlan';
import Earning from './Earning'
import backicon from "../../../../../../../Assets/backicon.svg";




const SpecialPackageIndex = ({page , setPage}) => {
    let currentPage;
 switch (page){
     case 0:
         currentPage = <MyInvestmentSilverPlan setPage={setPage}  />
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
          <Earning setPage={setPage} />
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

export default SpecialPackageIndex;
