import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Main.css";
// import hello from "../../assets/hello.svg";
// import "./../main/";
import AddIcon from "@material-ui/icons/Add";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// import AccountBal from "./AccountBal";
// import MainTitle from "./MainTitle";
import download from "../../assets/Download.svg";
import uploadicon from "../../assets/upload-icon.svg";
import MainCenL from "./MainCenL";
import PackageWrap from "./PackageWrap";
import apple from "../../assets/apple-btn.png";
import android from "../../assets/apple-btn.png";
// import MainHeader from "./main-header/MainHeader";
import {
  showModal,
  showWithdrawalModal,
} from "../../../../../redux/actions/modal.action";
import DashboardLayout from "../../dashboardDefaultLayout/DashboardLayout";
// import { selectCurrentUser } from "../../../../../redux/selectors/auth.selector";
import { useUser } from "../../../../../hooks/use-user";
import { $api } from "../../../../../helpers/$api";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const DashboardCard = ({
  title,
  amount,
  change,
  hasActions = false,
  returns,
  color,
  "footer-color": footerColor = "wallet-footer1",
}) => {
  return (
    <div className="main__cards  ">
      <div className={`w${color}`}>
        <div className="card_inner1">
          <p className="card-tit ">{title}</p>
          <p className="amount ">&#36; {amount}</p>
          {change && <p className="change">{change}% portfolio change today</p>}

          {hasActions && (
            <div className="wallet-icons mt-4 ">
              <div className="wallet-icons-bg1">
                <img className="" src={download} alt="" />
              </div>
              <div
                className="
                  wallet-icons-bg2"
              >
                <img className="" src={uploadicon} alt="" />
              </div>
            </div>
          )}

          {returns && (
            <div className={footerColor}>
              <p className="returns">Total Returns:</p>
              <p className="amount">&#36; {returns}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Main = ({ toggleModalAppearance, toggleWithdrawalModalAppearance }) => {
  const classes = useStyles();
  // const [showModal, setShowModal] = useState(false);
  // const CurrentUser = useSelector(selectCurrentUser);
  const user = useUser();
  const [balances, setBalances] = useState({
    ovest: "0.00",
    savest: {
      total: "0.000",
      percentageChane: "0.0",
      totalReturns: "0",
    },
    investment: {
      total: "0.00",
      percentageChane: "0.0",
      totalReturns: "0.00",
    },
  });
  const { lastname } = user;

  useEffect(() => {
    (async () => {
      try {
        const balances = await $api.user.getBalances();

        setBalances(balances);
      } catch (error) {
        // error getting balances
      }
    })();
  }, [setBalances]);

  const openModal = () => {
    toggleModalAppearance();
    console.log("Open redux");
  };
  const openWithdrawalModal = () => {
    toggleWithdrawalModalAppearance();
    console.log("open redux");
  };

  let myDate = new Date();
  let hrs = myDate.getHours();
  let greet;
  if (hrs < 12) greet = " Morning";
  else if (hrs >= 12 && hrs <= 17) greet = " Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = " Evening";

  return (
    <>
      <DashboardLayout>
        <main>
          <div className="main__container">
            {/* <!-- MAIN TITLE STARTS HERE --> */}
            <div className="main__title" style={{ marginTop: "1.7rem" }}>
              <div className="main__greeting">
                <h1>
                  {greet} {lastname}
                </h1>

                <p>Welcome to your OVest account. View your progress</p>
              </div>
              <div className="hero-btns">
                <Button
                  onClick={openModal}
                  variant="contained"
                  color="#"
                  className={classes.button}
                  startIcon={<AddIcon />}
                  style={{
                    backgroundColor: "#0768F6",
                    color: "white",
                    width: "150px",
                    height: "52px",
                    textTransform: "capitalize",
                    fontSize: "15px",
                    fontWeight: "500",
                    lineHeight: "30px",
                    borderRadius: "4px 4px  4px 0px",
                  }}
                >
                  Fund Wallet
                </Button>

                <Button
                  startIcon={<BackupOutlinedIcon />}
                  onClick={openWithdrawalModal}
                  style={{
                    border: "1px solid #0768F6",
                    color: "#0768F6",
                    height: "52px",
                    width: "140px",
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "30px",
                    textTransform: "capitalize",
                    borderRadius: "4px 4px  4px 0px",
                  }}
                >
                  Withdraw
                </Button>
              </div>
            </div>
            {/* <MainHeader /> */}
            {/* <!-- MAIN TITLE ENDS HERE --> */}
            {/* <!-- MAIN CARDS STARTS HERE --> */}
            <div className=" wallet-card " style={{ marginTop: "10px" }}>
              <DashboardCard
                title="OVest Wallet Balance"
                amount={balances.ovest}
                hasActions
                color="1"
              />
              <DashboardCard
                title="Savest Total Balance"
                amount={balances.savest.total}
                change={balances.savest.percentageChane}
                returns={balances.savest.totalReturns}
                color=" wallet w2"
              />

              <DashboardCard
                title="Total Amount Invested"
                amount={balances.investment.total}
                change={balances.investment.percentageChane}
                returns={balances.investment.totalReturns}
                color=" wallet w3"
                footer-color="wallet-footer2"
              />
            </div>

            <div className="main-center ">
              <div className="main-center-l ">
                <MainCenL />
              </div>
              <div className="main-center-r ">
                <PackageWrap />
                <div className="mobile-download mt-5">
                  <p>Download the Mobile App</p>
                  <img src={apple} alt="" srcSet="" />
                  <img src={android} alt="" srcSet="" />
                </div>
              </div>
            </div>
            {/* <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Times of Watching</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div> */}
            {/* <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Videos</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div> */}
            {/* <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Likes</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div> */}
            {/* <!-- MAIN CARDS ENDS HERE --> */}
            {/* <!-- CHARTS STARTS HERE --> */}
            {/* <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div> */}
            {/* <!-- CHARTS ENDS HERE --> */}
          </div>
        </main>
      </DashboardLayout>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModalAppearance: () => dispatch(showModal()),
  toggleWithdrawalModalAppearance: () => dispatch(showWithdrawalModal()),
});

export default connect(null, mapDispatchToProps)(Main);
