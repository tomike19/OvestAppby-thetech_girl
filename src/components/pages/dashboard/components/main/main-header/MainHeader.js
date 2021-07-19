import React, { useState } from "react";
import "./MainHeader.css";
import AddIcon from "@material-ui/icons/Add";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function MainHeader() {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
    console.log("love");
  };

  return (
    <div>
      <div className="main__title">
        {/* <img src={hello} alt="hello" /> */}
        <div className="main__greeting">
          <h1>Morning, Angela</h1>
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
              fontSize: "15  px",
              fontWeight: "500",
              lineHeight: "30px",
            }}
          >
            Fund Wallet
          </Button>

          <Button
            startIcon={<BackupOutlinedIcon />}
            style={{
              border: "1px solid #0768F6",
              color: "#0768F6",
              height: "52px",
              width: "140px",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "30px",
              textTransform: "capitalize",
            }}
          >
            Withdraw
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
