import React,{useState} from 'react'
import './MaturedInvest.css'
import Button from "@material-ui/core/Button";
import closemodalicon from '../../../../../Assets/closemodalicon.svg'
import MaturedInvestmentIndex from '../../../components/investment/investment-modal/matured-investment-modal/MaturedSilvest/MaturedInvestmentIndex'
import MaturedSpecialIndex from '../../../components/investment/investment-modal/matured-investment-modal/MaturedSpecial/MaturedSpecialIndex'
import Rectangle64 from '../../../assets/Rectangle 64.svg'

const MaturedInvest = () => {
  const [page, setPage] = useState(0)

    return (
        <div className="parent-allinvestment">
        <p className="get-started">Here is the list of all your investments</p>
          <div className="all-investment">
          <img src={Rectangle64} alt="" className="allinvestment-img"/>
          <div className="all-investmentchild"> 
          <h6 className="allinvestment-h6">Silvest Investment Plan</h6>
          <p className="allinvestment-p">Capital NGN50,000</p>
          <div>
                   <a href="#maturedinvestmentmodal">

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
                      letterSpacing: "0.03em",
                      textAlign: "center",
                      marginTop: "4rem"
                    }}
                >
                  Plan Details
                </Button>
                    </a>
               </div>
          </div>
          <div className="matured-main">
            <p className="matured">Matured </p>
            <p className="matured-naira">N150,000</p>
            <p className="matured-balance">Balance</p>
          </div>
           </div>

           <div className="all-investment">
          <img src={Rectangle64} alt="" className="allinvestment-img"/>
          <div className="all-investmentchild"> 
          <h6 className="allinvestment-h6">Silvest Investment Plan</h6>
          <p className="allinvestment-p">Capital NGN50,000</p>
          <button className="allinvestment-button">Plan Details</button>
          </div>
          <div className="matured-main">
            <p className="matured">Matured </p>
            <p className="matured-naira">N150,000</p>
            <p className="matured-balance">Balance</p>
          </div>
           </div>

           <div className="all-investment">
          <img src={Rectangle64} alt="" className="allinvestment-img"/>
          <div className="all-investmentchild"> 
          <h6 className="allinvestment-h6">Special Package Plan</h6>
          <p className="allinvestment-p">Capital NGN50,000</p>
          <div>
                   <a href="#maturedspecialindex">

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
                      letterSpacing: "0.03em",
                      textAlign: "center",
                      marginTop: "4rem"
                    }}
                >
                  Plan Details
                </Button>
                    </a>
               </div>
          </div>
          <div className="matured-main">
            <p className="matured">Matured </p>
            <p className="matured-naira">N150,000</p>
            <p className="matured-balance">Balance</p>
          </div>
           </div>
           <>
               <div id="maturedinvestmentmodal" className="maturedinvestmentmodal">
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

<MaturedInvestmentIndex {... {page, setPage}}/>
            </div>
           
                
               </div>
               </>
                
               <>
               <div id="maturedspecialindex" className="maturedspecialindex">
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

<MaturedSpecialIndex {... {page, setPage}}/>
            </div>
           
                
               </div>
               </>
        </div>
    )
}

export default MaturedInvest
