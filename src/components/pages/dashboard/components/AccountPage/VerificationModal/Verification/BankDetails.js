import React from 'react'
import './BankDetails.css'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const BankDetails = () =>
{
  const classes = useStyles();
  
  return (
    <div className="bank-section">
      <div className="bankDetails-header">
        <h1>Add Bank Account</h1>
        <p>Add a valid account details to get verified.</p>
      </div>
      <div className="bankInput">
        <input
          type="text"
          placeholder="Enter account number"
          className="bank-input"
        />
        <br />
        <input
          type="text"
          placeholder="Select back"
          className="bank-input mt-5"
        />
      </div>
      <div className="bank-btns">
        <Button
          // onClick={openModal}
          variant="contained"
          color="#"
          className={classes.button}
          style={{
            backgroundColor: "#0768F6",
            color: "white",
            width: "396px",
            height: "56px",
            textTransform: "capitalize",
            fontSize: "1.6rem",
            fontWeight: "500",
            lineHeight: "30px",
            borderRadius: "4px 4px 4px 0px",
            position: "relative",
            right: "8px",
            marginTop: "26px",
          }}
        >
          Update Profile
        </Button>
      </div>
    </div>
  );
}

export default BankDetails
