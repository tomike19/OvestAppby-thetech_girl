import React from 'react'
import "../../BankCards/BankCard.css";
import AddCard from '../AddCard';

const CardIndex = ( { section, setSection } ) =>
{
  let CurrentPage;

  switch ( section )
  {
    case 0:
      CurrentPage = <AddCard setSection={setSection} />;
      break;
  }
  return (
    <div className="current-page">
      {CurrentPage}
    </div>
  )
}

export default CardIndex
