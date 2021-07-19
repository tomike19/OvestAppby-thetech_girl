import React from 'react'
import cardcloseicon from "../../../../../../Assets/cardcloseicon.svg";
import   './PersonalNote.css'

const PersonalNote = ({setSection}) => {
  return (
    <div className="information-note">
      <div className="informationWrapper">
        <button
          className="closemodalicon-btn"
          onClick={() => {
            setSection(0);
          }}
        >
          <img
            className="cardcloseicon"
            src={cardcloseicon}
            alt="card close icon"
          />
        </button>
      </div>
      <h1>Kindly Note</h1>
      <p>
        Some details here can’t be edited. Contact support@ovest.ng to effect
        some changes.
      </p>
    </div>
  );
}

export default PersonalNote
