import React from "react";
import lock from "../../../../../Assets/lock.svg";
import "./Withdrawal-pages.css";
import {
  StyledBankTransferFormButton,
  ButtonGroup,
  colors,
} from "../../../../../Syles/styles";
import { Formik, Form } from "formik";
import Loader from "react-loader-spinner";
import * as Yup from "yup";
import { BankTranferDetailsTextInput } from "../../../../Formik/BankDetailsInput";

const BankConfirmPassword = ({ setStage }) => {
  return (
    // <div>
    <div className="cardpaymentsuccess cardpassword">
      <div className="cardpassword-inner">
        <button>
          <img className=" " src={lock} alt="card close icon" />
        </button>
        <h5>Confirm Password</h5>
        <p>Enter your OVest password to approve your transaction</p>
        <Formik
          initialValues={{
            password: "",
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
                name="password"
                type="password"
                placeholder="Password"
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledBankTransferFormButton
                    type="submit"
                    onClick={() => {
                      setStage(0);
                    }}
                  >
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
    </div>
    // </div>
  );
};

export default BankConfirmPassword;
