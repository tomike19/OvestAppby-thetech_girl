import React from "react";
import { Formik, Form } from "formik";
import Loader from "react-loader-spinner";
import * as Yup from "yup";
import "./Withdrawal-pages.css";

import {
  StyledBankTransferFormButton,
  ButtonGroup,
  colors,
} from "../../../../../Syles/styles";

import { BankTranferDetailsTextInput } from "../../../../Formik/BankDetailsInput";
const SavestForm = ({ setStage }) => {
  const changeStage = () => {
    setStage(2);
  };
  return (
    <div>
      <div
        style={{
          marginTop: "40px",
          marginBottom: "23px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="savestform"
      >
        <h5>Withdraw to Savest</h5>
        <p>How much would you like to withdraw from your wallet? </p>

        <Formik
          initialValues={{
            Amount: "",
          }}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
            changeStage();

            // loginUser(values, history, setFieldError, setSubmitting);
          }}
          validationSchema={Yup.object({
            Amount: Yup.string().required(" Amount Field is Required"),
          })}
        >
          {({ isSubmitting }) => (
            <Form>
              <BankTranferDetailsTextInput
                name="Amount"
                type="tel"
                placeholder="NGN"
              />

              <p className="savestform-p">
                Wallet Balance: <span> N5,000,000</span>
              </p>

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledBankTransferFormButton type="submit">
                    Next
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
    </div>
  );
};

export default SavestForm;
