import React, { useState } from "react";
import "./PaymentOption.css";
import Transfer from "../../../assets/Transfer.svg";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Card from "../../../assets/Card.svg";
import crypto from "../../../assets/crypto.svg";
import wallet from "../../../assets/wallet.svg";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";

const PaymentOption = () => {
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 32,
      height: 20,
      padding: 0,
      margin: theme.spacing(1),
      marginTop: "19px",
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: "#0768F6",
        marginTop: "px",

        "& + $track": {
          backgroundColor: "#ffffff",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#ffffff",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 14,
      height: 17,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[500],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="payment-page">
      <div className="payment-header">
        <h1>Payment Option</h1>
        <p>
          Select your preferred payment option for withdrawal and wallet funding
        </p>
      </div>
      <div className="paymentOption">
        <div className="payment-details">
          <img src={Transfer} alt="name" />
          <p>By Bank Transfer</p>
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
            />
          </FormGroup>
        </div>
      </div>
      <div className="paymentOption">
        <div className="payment-details">
          <img src={Card} alt="name" />
          <p>By Card</p>
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                />
              }
            />
          </FormGroup>
        </div>
      </div>
      <div className="paymentOption">
        <div className="payment-details">
          <img src={crypto} alt="name" />
          <p>By Nebbix (Cryptocurrency)</p>
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={state.checkedC}
                  onChange={handleChange}
                  name="checkedC"
                />
              }
            />
          </FormGroup>
        </div>
      </div>
      <div className="paymentOption">
        <div className="payment-details">
          <img src={wallet} alt="name" />
          <p>Enable USD Wallet</p>
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={state.checkedD}
                  onChange={handleChange}
                  name="checkedD"
                />
              }
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;
