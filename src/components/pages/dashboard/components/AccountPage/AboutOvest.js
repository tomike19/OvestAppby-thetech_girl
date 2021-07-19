import React,{useState} from 'react'
import Arrowright from "../../assets/Arrowright.svg";
import closemodalicon from "../../../../Assets/closemodalicon.svg";
import About from "../../assets/About.svg";
import "./Account.css";
import AboutIndex from './AboutModal/AboutIndex';



const Aboutovest = () =>
{
  const [section, setSection] = useState(0);
  
  return (
    <div>
      <a href="#aboutModal">
        <div className="Account-section">
          <div
            style={{
              display: "flex",
            }}
          >
            <div>
              <img src={About} alt="" className="imageAccount" />
            </div>
            <div>
              <p className="Account-text">About OVest</p>
              <p className="account-paragraph">About OVest app</p>
            </div>
          </div>
          <div>
            <img src={Arrowright} alt="" className="arrow" />
          </div>
        </div>
      </a>

      <>
        <div id="aboutModal" className="about-modal">
          <div className="accountmodal-head">
            {section === 0 ? (
              <a href="#" className="closemodalicon-btn">
                <img
                  src={closemodalicon}
                  alt="close modal"
                  className="closemodal"
                />
              </a>
            ) : null}
            <AboutIndex {...{ section, setSection }} />
          </div>
        </div>
      </>
    </div>
  );
}

export default Aboutovest
