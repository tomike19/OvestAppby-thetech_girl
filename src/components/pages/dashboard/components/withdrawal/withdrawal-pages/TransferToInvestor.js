import React from "react";
import { Formik, Form } from "formik";
import Loader from "react-loader-spinner";
import * as Yup from "yup";
import {
  StyledBankTransferFormButton,
  ButtonGroup,
  colors,
} from "../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "../../../../Formik/BankDetailsInput";

const TransferToInvestor = ({ setStage }) => {
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
        <h5>Withdraw to OVestor</h5>
        <p>How much would you like to withdraw from your wallet? </p>

        <Formik
          initialValues={{
            Amount: "",
            email: "",
          }}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
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
                type="number"
                placeholder="NGN"
              />

              <p className="savestform-p">
                Wallet Balance: <span> N5,000,000</span>
              </p>

              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "20px",
                  lineSpacing: "0.03em",
                  color: "#121212",
                }}
              >
                Username or Email
              </p>
              <BankTranferDetailsTextInput
                name="email"
                type="email"
                placeholder="Enter Ovestor’s email address"
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledBankTransferFormButton
                    type="submit"
                    onClick={() => {
                      setStage(5);
                    }}
                  >
                    Send
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

export default TransferToInvestor;
