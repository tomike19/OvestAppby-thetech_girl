import React from "react";
import Loader from "react-loader-spinner";
import { Formik, Form } from "formik";
import Info from "../../../assets/info.svg";
import {
  ButtonGroup,
  StyledBankTransferFormButton,
  colors,
} from "../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "./../../../../Formik/BankDetailsInput";
import * as Yup from "yup";
import'./BankCard.css'

const AddBankAccount = ({setSection}) => {
  return (
    <div className="addbank-page">
      <p className="bank_text">Add Bank Account</p>
      <div className="formSection">
        <Formik
          initialValues={{
            account_number: "",
          }}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
          }}
          validationSchema={Yup.object({
            account_number: Yup.string().required("account number is required"),
          })}
        >
          {({ isSubmitting }) => (
            <Form className="crypto-form">
              <BankTranferDetailsTextInput
                name="account_number"
                type="tel"
                placeholder="Enter Account Number"
              />
              <div>
                <select className="bank-select ml-5">
                  <option value="" key="">
                    Select Bank
                  </option>
                  <option value="" key="">
                    First Bank
                  </option>
                </select>
              </div>
              <ButtonGroup
                className="button-group"
                onClick={() => {
                  setSection(1);
                }}
              >
                {!isSubmitting && (
                  <StyledBankTransferFormButton type="submit">
                    Confirm Bank Account
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

export default AddBankAccount;
