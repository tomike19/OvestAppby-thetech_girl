import React from 'react'
import AboutOvest from '../AccountDetails/AboutOvest';

const AboutIndex = ({section,setSection}) =>
{
  let CurrentPage;
  switch ( section )
  {
    case 0:
      CurrentPage = <AboutOvest setSection ={setSection}/>
  }
  return (
    <div className="current-page">
      {CurrentPage}
    </div>
  )
}

export default AboutIndex
