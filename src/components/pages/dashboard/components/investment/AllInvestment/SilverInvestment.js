import React,{useState} from 'react'
import {connect} from 'react-redux'
import './SilverInvestment.css'
import Button from "@material-ui/core/Button";
import closemodalicon from '../../../../../Assets/closemodalicon.svg'
import InvestmentIndex from '../investment-modal/InvestmentIndex'
import SpecialPackageIndex from '../investment-modal/all-investment-modal/SpecialPackageModal/SpecialPackageIndex'
import Rectangle64 from '../../../assets/Rectangle 64.svg'
import Rectangle68 from '../../../assets/Rectangle 68.svg'
import Rectangle66 from '../../../assets/Rectangle 66.svg'
import {showModal} from '../../../../../../redux/actions/modal.action'
// import { showInvestmentModalState } from '../../../../../../redux/selectors/modal.selector'

const SilverInvestment = () => {
    const [page, setPage] = useState(0)
    
    return (
        <>
        <div className="parent-silverinvestment">
               <p className="get-started">Select an investment plan to get started</p>
               <div className="silver-investment mt-3">
               <img src={Rectangle64} alt="" className="silverinvestment-img"/>
               <div className="silver-investmentchild">
               <h6 className="silverinvestment-h6">Silvest Investment Plan</h6>
               <p className="silverinvestment-p">Lock-away funds safely in our Silvest investment plan for  
               <span> 3 months</span> with at least <span>NGN50,000.</span></p>
               <div>
                   <a href="#silverinvestmentmodal">

               <Button
                  variant="contained"
                  color="#"
                  style={{
                      backgroundColor: "#0768F6",
                      color: "white",
                      width: "149px",
                      height: "40px",
                      textTransform: "capitalize",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "19px",
                      borderRadius: "4px 4px 4px 0px",
                      letterSpacing: "0.03em"
                    }}
                >
                  View Details
                </Button>
                    </a>
               </div>
               
               </div>

              
                </div>

                <div className="gold-investment">
               <img src={Rectangle68} alt="" className="silverinvestment-img"/>
               <div className="silver-investmentchild">
               <h6 className="silverinvestment-h6">Silvest Investment Plan</h6>
               <p className="silverinvestment-p">Lock-away funds safely in our Silvest investment plan for  
               <span> 3 months</span> with at least <span>NGN50,000.</span></p>
               <button className="silverinvestment-button">View Details</button>
               </div>
                </div>

                <div className="special-package">
               <img src={Rectangle66} alt="" className="silverinvestment-img"/>
               <div className="silver-investmentchild">
               <h6 className="silverinvestment-h6">Silvest Investment Plan</h6>
               <p className="silverinvestment-p">Lock-away funds safely in our Silvest investment plan for  
               <span> 3 months</span> with at least <span>NGN50,000.</span></p>
               <div>
                   <a href="#specialinvestmentmodal">

               <Button
                  variant="contained"
                  color="#"
                  style={{
                      backgroundColor: "#0768F6",
                      color: "white",
                      width: "149px",
                      height: "40px",
                      textTransform: "capitalize",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "19px",
                      borderRadius: "4px 4px 4px 0px",
                      letterSpacing: "0.03em"
                    }}
                >
                  View Details
                </Button>
                    </a>
               </div>
               {/* <button  className="silverinvestment-button">View Details</button> */}
               </div>
                </div>
             </div>
            {/* silver investment */}
             <>
               <div id="silverinvestmentmodal" className="silverinvestmentmodal">
               <div className="investmodal-head">
                {page ===0 ? (
                    <a href = "#"
                    className="closemodalicon-btn" 
                    onClick={()=>{
                        setPage(0);
                    } }>
                    <img src={closemodalicon} alt="" className="closemodal"/>
                    </a>
                ) : null
            }

<InvestmentIndex {... {page, setPage}}/>
            </div>
           
                
               </div>
               </>
               {/* special package */}
               <>
               <div id="specialinvestmentmodal" className="specialinvestmentmodal">
               <div className="investmodal-head ">
                {page ===0 ? (
                    <a href = "#"
                    className="closemodalicon-btn" 
                    onClick={()=>{
                        setPage(0);
                    } }>
                    <img src={closemodalicon} alt="" className="closemodal"/>
                    </a>
                ) : null
            }

<SpecialPackageIndex {... {page, setPage}}/>
            </div>
           
                
               </div>
               </>
</>

    )
}


const mapDispatchToProps = (dispatch) =>({
    toggleInvestModalApperance: ()=> dispatch(showModal()),
    toggleSpecialPackageModalApperance: ()=> dispatch(showModal()),
})


export default connect(null, mapDispatchToProps)(SilverInvestment)
