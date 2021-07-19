import React from "react";
import "./Identification.css";
import Upload from "../../../../assets/Upload.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Identification = () => {
  const classes = useStyles();

  return (
    <div className="identification-section">
      <div className="identificationPage">
        <h1>Means of Identification</h1>
        <p>You must add a valid means of identification to get verified.</p>
      </div>
      <div className="identification-upload">
        <div>
          <img src={Upload} alt="" className="upload" />
          <p>Upload Valid ID</p>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="ID Card Number"
          className="upload-input"
        />
        <p className="Upload-note">
          NB: means of identification should be government issued which can be
          driver’s license, international passport, voter’s card etc
        </p>
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
          Upload ID
        </Button>
      </div>
    </div>
  );
};

export default Identification;
