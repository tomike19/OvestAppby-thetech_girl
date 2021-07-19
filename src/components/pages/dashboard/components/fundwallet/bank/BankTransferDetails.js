import React from "react";
import "./bank.css";
import Loader from "react-loader-spinner";
import { Formik, Form } from "formik";
import {
  ButtonGroup,
  StyledBankTransferFormButton,
  colors,
} from "../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "../../../../Formik/BankDetailsInput";
import { apiPost } from "../../../../../../helpers";
import useAuth from "../../../../../../hooks/useAuth";
import * as Yup from "yup";

const BankTransferDetails = ({ setStage }) => {
  const { user } = useAuth();

  const changeStage = () => {
    setStage(3);
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
        className="w3-light-grey"
      >
        <div
          className="w3-blue"
          style={{
            height: "2px",
            width: "50%",
          }}
        ></div>
      </div>
      <br></br>
      <div className="banktransferdetails-header">
        <h5>Deposit Details</h5>
        <p>Fill the following details to get your payment approved.</p>
      </div>
      <Formik
        initialValues={{
          amount: "",
          account_name: "",
          account_no: "",
          bank: "",
        }}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          changeStage();

          apiPost(`wallet/deposit/bank`, values)
            .then((data) => {
              if (data.statusCode === 200) {
                console.log(data);
              }
            })
            .catch((err) => {
              console.log(err);
            });

          // loginUser(values, history, setFieldError, setSubmitting);
        }}
        validationSchema={Yup.object({
          // phone: Yup.string()
          //   .matches(phoneRegExp, "Phone number is not valid")
          //   .required("Phone Number is Required"),
          amount: Yup.string().required("Amount deposited Field is Required"),
          account_name: Yup.string().required("Account Name Field is Required"),
          account_no: Yup.string().required("Account Name Field is Required"),
          bank: Yup.string().required("Bank Name Field is Required"),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <BankTranferDetailsTextInput
              name="amount"
              type="tel"
              placeholder="Enter Amount deposited"
            />

            <BankTranferDetailsTextInput
              name="account_name"
              type="text"
              placeholder="Account Name sent from"
            />
            <BankTranferDetailsTextInput
              name="account_no"
              type="number"
              placeholder="Account Number sent from"
            />
            <BankTranferDetailsTextInput
              name="bank"
              type="text"
              placeholder="Bank Name sent from"
            />
            <ButtonGroup>
              {!isSubmitting && (
                <StyledBankTransferFormButton type="submit">
                  Proceed
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

export default BankTransferDetails;
