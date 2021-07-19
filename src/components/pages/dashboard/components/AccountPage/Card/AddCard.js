import React, { useState } from "react";
import Loader from "react-loader-spinner";
import "../BankCards/BankCard.css";
import { Formik, Form } from "formik";
import Button from "@material-ui/core/Button";
import {
  ButtonGroup,
  StyledBankTransferFormButton,
  colors,
} from "../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "./../../../../Formik/BankDetailsInput";
import closemodalicon from "../../../../../Assets/closemodalicon.svg";
import banksuccess from "../../../assets/banksucess.svg";
import { makeStyles } from "@material-ui/core/styles";

import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const AddCard = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const classes = useStyles();

  return (
    <div className="bankCard-section">
      <h1>Add Card</h1>
      <p>Enter your debit card details </p>

      <div>
        <Formik
          initialValues={{
            card_number: "",
          }}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
          }}
          validationSchema={Yup.object({
            card_number: Yup.string().required("account number is required"),
          })}
        >
          {({ isSubmitting }) => (
            <Form className="crypto-form">
              <BankTranferDetailsTextInput
                name="card_number"
                type="tel"
                placeholder="Enter Card Number"
              />
              <div className="card-input">
                <div>
                  <input
                    type="text"
                    className="input-card "
                    placeholder="MM/YY"
                  />
                  <input
                    type="text"
                    className="input-card ml-2"
                    placeholder="CVV"
                  />
                  <input
                    type="text"
                    className="input-card ml-2"
                    placeholder="PIN"
                  />
                </div>
              </div>
              <ButtonGroup
                onClick={() => setShowSuccess(true)}
                className="button-group"
              >
                {!isSubmitting && (
                  <StyledBankTransferFormButton type="submit">
                    Add Card
                  </StyledBankTransferFormButton>
                )}

                {isSubmitting && (
                  <Loader
                    type="ThreeDots"
                    color={colors.primary}
                    height={49}
                    width={100}
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
      </div>
      <div
        className={`confirmbank__success-bg ${
          showSuccess ? "success-info" : ""
        }`}
      >
        <div className="confirm__success-content">
          <div className="confirm-close-modal">
            <button className="closemodal-btn">
              <img
                src={closemodalicon}
                alt=""
                className="closemodal"
                onClick={() => setShowSuccess(false)}
              />
            </button>
          </div>
          <div>
            <img src={banksuccess} alt="bankSuccess" className="bank-image" />
          </div>
          <p className="bank-success-text">Card Added Successfully</p>
          <Button
            variant="contained"
            color="#"
            className={classes.button}
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
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "33px",
            }}
          >
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
