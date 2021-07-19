import React from "react";
import { Formik, Form } from "formik";
// import { CardFundingTextInput } from "../../../../Formik/FormLib";
import * as Yup from "yup";
import flutter from "../../../../../Assets/flutter.svg";
import {
  // StyledContainer,
  // StyledFormArea,
  // StyledLabel,
  // StyledTextInput,
  // StyledFormButton,
  // StyledTitle,
  ButtonGroup,
  StyledTextInputBankTransfer,
  StyledBankTransferFormButton,
  // SubTitle,
  // ExtraText,
  // TextLink,
  // colors,
  // StyledTextInputCardFunding,
} from "../../../../../Syles/styles.js";
import cardlogo from "../../../../../Assets/cardlogo.svg";
import cardcloseicon from "../../../../../Assets/cardcloseicon.svg";
import "./card.css";

const CardAmountInput = ({ setStage, toggleModalAppearance }) => {
  return (
    <div className="cardpaymentinput">
      <div className="cardpaymentwrapper">
        <div className="cardpaymentinput-nav">
          <img src={cardlogo} alt="card logo" />
          <button
            className="closemodalicon-btn"
            onClick={() => {
              setStage(0);
            }}
          >
            <img
              className="cardcloseicon"
              src={cardcloseicon}
              alt="card close icon"
            />
          </button>
        </div>
        <div className="cardpaymentinput-header">
          <h5>N500,000.00</h5>
          <small>David@xyz.com</small>
        </div>
        <Formik
          initialValues={{
            cardNumber: "",
          }}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
            // loginUser(values, history, setFieldError, setSubmitting);
          }}
          validationSchema={Yup.object({
            // phone: Yup.string()
            //   .matches(phoneRegExp, "Phone number is not valid")
            //   .required("Phone Number is Required"),
            cardNumber: Yup.string().required(
              "Card Number deposited Field is Required"
            ),
          })}
        >
          {({ isSubmitting }) => (
            <Form>
              <StyledTextInputBankTransfer
                name="cardNumber"
                type="number"
                placeholder="Card Number"
              />

              <StyledTextInputBankTransfer
                style={{
                  marginTop: "0",
                  width: "162px",
                  // height: "48px",
                  display: "inline",
                  marginLeft: "15px",
                }}
                name="date"
                type="date"
                placeholder="MY/YY"
              />
              <StyledTextInputBankTransfer
                style={{
                  marginTop: "0",
                  width: "162px",
                  // height: "48px",
                  marginLeft: "52px",
                  display: "inline",
                }}
                name="CVV"
                type="number"
                placeholder="CVV"
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledBankTransferFormButton
                    type="submit"
                    onClick={() => {
                      setStage(8);
                    }}
                    style={{ marginTop: "-20px" }}
                  >
                    Pay NGN500,000.00
                  </StyledBankTransferFormButton>
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <div className="flutter-wrapper">
          <div className="fluter-btn">
            <img src={flutter} alt="flutter" />
            secured by Flutterwave
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAmountInput;
