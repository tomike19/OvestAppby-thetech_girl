import React from "react";
import "./Residence.css";
import ResidenceImage from "../../../../assets/residenceimage.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Residence.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Residence = () => {
  const classes = useStyles();

  return (
    <div className="residence-section">
      <div className="residence-header">
        <h1>Proof of Residence</h1>
        <p>
          Submit one of the following documents as POR : Bank statement, utility
          bill (electricity, water, phone, internet, TV) tenancy contract or
          residence certificate.
        </p>
      </div>
      <div className="proof-section">
        <div className="proof-residence">
          <div className="residence-text">
            <div>
              <img src={ResidenceImage} alt="" className="residence-image" />
            </div>
            <div>
              <p>Scan/photo of POR</p>
            </div>
          </div>
          <Button
            // onClick={openModal}
            variant="contained"
            color="#"
            className={classes.button}
            style={{
              backgroundColor: "#0768F6",
              color: "white",
              width: "82px",
              height: "30px",
              textTransform: "capitalize",
              fontSize: "1rem",
              fontWeight: "500",
              lineHeight: "30px",
              borderRadius: "4px 4px 4px 0px",
              position: "relative",
              right: "8px",
            }}
          >
            Browse
          </Button>
        </div>
      </div>
      <p className="pt-3 file-text">Max. file size: 25MB</p>
      <div className="document-text">
        <p>
          Is the Proof of Residence document you are submitting issued in your
          name:
        </p>
      </div>
      <div className="mt-2">
        <input type="radio" id="html" name="Enquiry" value="HTML" /> {" "}
        <label className="residence-label">Yes</label>
        <input
          type="radio"
          id="daily"
          name=""
          value="HTML"
          className="residence-input"
        />
          <label className="residence-label2">No</label>
      </div>
      <Button
        // onClick={openModal}
        variant="contained"
        color="#"
        className={classes.button}
        style={{
          backgroundColor: "#0768F6",
          color: "white",
          width: "396px",
          height: "52px",
          textTransform: "capitalize",
          fontSize: "1.6rem",
          fontWeight: "500",
          lineHeight: "30px",
          borderRadius: "4px 4px 4px 0px",
          position: "relative",
          right: "8px",
          marginTop: "45px",
        }}
      >
        Verify Document
      </Button>
    </div>
  );
};

export default Residence;
