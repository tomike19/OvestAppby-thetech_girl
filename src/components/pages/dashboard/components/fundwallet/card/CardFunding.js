import React from "react";
import "./card.css";
import Loader from "react-loader-spinner";
import { Formik, Form } from "formik";
// import { CardFundingTextInput } from "../../../../Formik/FormLib";
import * as Yup from "yup";

import {
  ButtonGroup,
  colors,
  StyledTextInputBankTransfer,
  StyledBankTransferFormButton,
} from "../../../../../Syles/styles.js";
import { BankTranferDetailsTextInput } from "../../../../Formik/BankDetailsInput";

const CardFunding = ({ setStage }) => {
  const changeStage = () => {
    setStage(6);
  };
  return (
    <div className="card-funding">
      <div className="card-funding-header">
        <h5> By Card</h5>
        <p>Fund your OVest wallet by using your card details</p>
      </div>
      <div className="card-funding-body">
        <p>How much would you like to add to your wallet? </p>
      </div>
      <Formik
        initialValues={{
          amount: "",
        }}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          console.log(values);
          changeStage();
        }}
        validationSchema={Yup.object({
          amount: Yup.string().required("Amount deposited Field is Required"),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <BankTranferDetailsTextInput
              name="amount"
              type="tel"
              placeholder="NGN"
            />

            <ButtonGroup>
              {!isSubmitting && (
                <StyledBankTransferFormButton
                  type="submit"
                  style={{ marginTop: "136px" }}
                >
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
  );
};

export default CardFunding;
