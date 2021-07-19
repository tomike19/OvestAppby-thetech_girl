import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { hideModal } from '../../../../../../../redux/actions/modal.action';
import closemodalicon from '../../../../../../Assets/closemodalicon.svg'
import MyInvestmentIndex from './MyInvestmentIndex'


const SpecialPackageModal = () => {
    const [page, setPage] = useState(0)
    const dispatch = useDispatch()
    return (
        <div>
            <div className="investpages">
                {page ===0 ? (
                    <button
                    className="closemodalicon-btn" 
                    onClick={()=>{
                        setPage(0);
                        dispatch(hideModal())
                    } }>
                    <img src={closemodalicon} alt="" className="closemodal"/>
                    </button>
                ) : null
            }

<MyInvestmentIndex {... {page, setPage}}/>
            </div>
            
        </div>
    )
}

export default SpecialPackageModal
