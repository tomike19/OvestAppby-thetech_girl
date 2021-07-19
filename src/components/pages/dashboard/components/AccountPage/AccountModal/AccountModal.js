import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { hideModal } from "../../../../../../redux/actions/modal.action";
import closemodalicon from "../../../../../Assets/closemodalicon.svg";
import AccountIndex from './AccountIndex';
import './AccountModal.css'

const AccountModal = () =>
{
  const [section, setSection] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
       <div className="Account-page">
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
          <AccountIndex{...{ section, setSection }} />
        </div>
      </div>
  )
}

export default AccountModal
