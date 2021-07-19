import React from 'react'
import closemodalicon from "../../../../../Assets/closemodalicon.svg";
import '../../Card/CardModal/CardIndex'

const CardModal = () =>
{
   const [section, setSection] = useState(0);
   const dispatch = useDispatch();
  return (
    <div>
       <div className="card-page">
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
       <CardIndex {...{ section, setSection }} />
     </div>
    </div>
  )
}

export default CardModal
