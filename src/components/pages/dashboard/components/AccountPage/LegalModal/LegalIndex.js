import React from 'react'
import Legal from '../Legal/Legal';
import LegalTerms from './../Legal/LegalTerms';
import backicon from "../../../../../Assets/backicon.svg";
import Faqs from '../Legal/Faqs';

const LegalIndex = ({section,setSection}) =>
{
  let CurrentPage;
  switch ( section )
  {
    case 0:
      CurrentPage = <Legal setSection={setSection} />;
      break;
    }
  
  return (
    <div className="current-page">
      {CurrentPage}
    </div>
  )
}

export default LegalIndex
