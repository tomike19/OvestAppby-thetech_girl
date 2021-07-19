import React from "react";
import "./Withdrawal-pages.css";
import Loader from "react-loader-spinner";
import { Formik, Form } from "formik";
import {
  StyledBankTransferFormButton,
  ButtonGroup,
  colors,
} from "../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "../../../../Formik/BankDetailsInput";
import * as Yup from "yup";

const BAnkAccountMethod = ({ setStage }) => {
  return (
    <div
      style={{
        height: "90vh",
      }}
    >
      <div
        className="BankAccountMethod"
        style={{
          marginTop: "40px",
          marginBottom: "23px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Formik
          initialValues={{
            Amount: "",
          }}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
            // changeStage();
            // loginUser(values, history, setFieldError, setSubmitting);
          }}
          validationSchema={Yup.object({
            Amount: Yup.string().required(" Amount Field is Required"),
          })}
        >
          {({ isSubmitting }) => (
            <Form>
              <h5 className="bam-h5">Withdraw to Bank Account</h5>
              <p className="bam-p">
                How much would you like to withdraw from your wallet?{" "}
              </p>
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
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "20px",

                  letterSpacing: "0.03em",

                  color: "#121212",
                }}
              >
                Select bank account{" "}
              </p>
              <div class="select">
                <BankTranferDetailsTextInput name="banks" id="standard-select">
                  <option value="" disabled selected hidden>
                    Select Bank
                  </option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </BankTranferDetailsTextInput>
                <span class="focus"></span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BAnkAccountMethod;
