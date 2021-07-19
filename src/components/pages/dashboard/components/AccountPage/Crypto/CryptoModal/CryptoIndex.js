import React from 'react'
import CryptoAccount from './CryptoAccount';


const CryptoIndex = ({ section, setSection }) => {
     let CurrentPage;
  switch ( section )
  {
    case 0:
      CurrentPage = <CryptoAccount setSection={setSection} />;
  }
      return(
      <div className="current-page">
      {CurrentPage}
    </div>
      )
  };
  export default CryptoIndex;
