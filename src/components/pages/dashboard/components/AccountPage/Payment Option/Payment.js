import React, {useState} from 'react'
import Arrowright from "../../../assets/Arrowright.svg";
import closemodalicon from "../../../../../Assets/closemodalicon.svg"
import AccountIndex from '../AccountModal/AccountIndex';

const Payment = () =>
{
  const [section, setSection] = useState(0);
  
  return (
    <div>
      <a href="#accountModal">
        <div className="Account">
          <div>
            <p>Enable Payment Option</p>
          </div>
          <div>
            <img
              src={Arrowright}
              alt=""
              className="arrow"
              // className="arrow"
              // onClick={openModal}
            />
          </div>
        </div>
      </a>

      <>
        <div id="accountModal" className="account-modal">
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
            <AccountIndex {...{ section, setSection }} />
          </div>
        </div>
      </>
    </div>
  );
}

export default Payment;
