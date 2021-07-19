import React from "react";
import DefaultLayout from "./../../layouts/DefaultLayout";
import "./Invest.css";
import investImage from "../Assets/aboutus-img.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Invest = () => {
  const classes = useStyles();

  return (
    <>
      <DefaultLayout>
        <div className="invest-wrapper">
          <div className="invest-section">
            <div className="investpage-header">
              <h1>
                A safe way to <span className="invest-save-color">invest</span>{" "}
                & <span className="invest-save-color">save</span> designed to
                give you the best returns.
              </h1>
              <p>
                You investment is secure because we always have equivalent
                amount of asset as the capital used in the business of foreign
                exchange trading and other investment opportunities offered by
                the industry (in case of rainy day).
              </p>
              <Button
                // onClick={openModal}
                variant="contained"
                color="#"
                className={classes.button}
                style={{
                  backgroundColor: "#0768F6",
                  color: "white",
                  width: "178px",
                  height: "52px",
                  textTransform: "capitalize",
                  fontSize: "1.6rem",
                  fontWeight: "normal",
                  lineHeight: "30px",
                  borderRadius: "4px 4px 4px 0px",
                  marginTop: "26px",
                }}
              >
                Get Started Now
              </Button>
            </div>
            <div className="investimage-wrapper">
              <img src={investImage} alt="" className="invest-image" />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Invest;
