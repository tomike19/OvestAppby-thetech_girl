import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { hideModal } from "../../../../../../redux/actions/modal.action";
import closemodalicon from "../../../../../Assets/closemodalicon.svg";

import ReferralIndex from './ReferralIndex';
import './ReferralModal.css'


const ReferralModal = () =>
{
  const [section, setSection] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="ReferralPages">
        <div className="">
          {section === 0 ? (
            <button
              className="closemodalicon-btn"
              onClick={() => {
                setSection(0);
                dispatch(hideModal());
              }}
            >
              <img src={closemodalicon} alt="" className="closemodal" />
            </button>
          ) : null}
          <ReferralIndex {...{ section, setSection }} />
        </div>
      </div>
    </div>
  );
}

export default ReferralModal
