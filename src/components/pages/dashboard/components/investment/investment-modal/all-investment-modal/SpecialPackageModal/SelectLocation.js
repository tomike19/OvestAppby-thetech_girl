import React from "react";
import "./SpecialPackage.css";

const SelectLocation = ({ setPage }) => {
  return (
    <div className="startinvestment-body">
      <div className="startinvestment-main">
        <div className="confirminvestment-main">
          <h5 className="selectlocation-h5"> Invest Now</h5>
          <p className="confirminvestment-textbody mt-2">
            Invest in OHouseEstate and become a land-owner in 6 months
          </p>
        </div>
        <div className="preferred-location">
          <h5 className="selectlocation-h5">Select preferred location</h5>
          <div className="selectdiv">
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="note-main">
            <p className="note">
              Location selected would determine landvest package that will be
              diisplayed
            </p>
          </div>
          <button className="invest" onClick={() => setPage(2)}>
            Invest
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectLocation;
