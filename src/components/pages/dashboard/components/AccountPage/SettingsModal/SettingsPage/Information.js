import React,{useState} from "react";
import "./Information.css";
import Loader from "react-loader-spinner";
import { Formik, Form } from "formik";
import Info from "../../../../assets/info.svg";
import {
  ButtonGroup,
  StyledBankTransferFormButton,
  colors,
} from "../../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "./../../../../../Formik/BankDetailsInput";
import * as Yup from "yup";
import closemodalicon from "../../../../../../Assets/closemodalicon.svg";


const Information = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="information">
      <div>
       
          <img
            src={Info}
            alt="Info"
            className="info-image"
            onClick={() => setShowSuccess(true)}
          />
      </div>
      <p>Personal Information</p>
      <div className="formSection">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            username: "",
            gender: "",
            Email: "",
            phonenumber: "",
            country: "",
            state: "",
          }}
          onSubmit={(values, { setsubmitting, setFieldError }) => {
            console.log(values);
          }}
          validationSchema={Yup.object({
            firstname: Yup.string().required("Firstname is required"),
            lastname: Yup.string().required("Lastname is required"),
            username: Yup.string().required("Username is required"),
            gender: Yup.string().required("Gender is required"),
            email: Yup.string().required("email is required"),
            phonenumber: Yup.string().required("Phonenumber id required"),
            country: Yup.string().required("country is required"),
            state: Yup.string().required("state is required"),
          })}
        >
          {({ isSubmitting }) => (
            <Form>
              <BankTranferDetailsTextInput
                name="firstname"
                type="tel"
                placeholder="Firstname"
              />

              <BankTranferDetailsTextInput
                name="lastname"
                type="tel"
                placeholder="Lastname"
              />

              <BankTranferDetailsTextInput
                name="username"
                type="tel"
                placeholder="Username"
              />

              <BankTranferDetailsTextInput
                name="gender"
                type="tel"
                placeholder="Gender"
              />
              <BankTranferDetailsTextInput
                name="email"
                type="tel"
                placeholder="Email"
              />

              <BankTranferDetailsTextInput
                name="phonenumber"
                type="tel"
                placeholder="Phonenumber"
              />
              <BankTranferDetailsTextInput
                name="country"
                type="tel"
                placeholder="Country"
              />
              <BankTranferDetailsTextInput
                name="state"
                type="tel"
                placeholder="State"
              />

              <ButtonGroup className="button-group">
                {!isSubmitting && (
                  <StyledBankTransferFormButton type="submit">
                    Update Profile
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
          <div className="info-text">
            <h1>Kindly Note</h1>
            <p>
              Some details here can’t be edited. Contact support@ovest.ng to
              effect some changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
