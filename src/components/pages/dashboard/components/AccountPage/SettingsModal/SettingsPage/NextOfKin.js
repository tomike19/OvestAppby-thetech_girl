import React from "react";
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
import './Information.css'

const NextOfKin = () => {
  return (
    <div className="information">
      <div>
        <img src={Info} alt="Info" className="info-image" />
      </div>
      <p>Next of Kin</p>

      <div className="formSection">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            Email: "",
            gender: "",
            phonenumber: "",
            houseAddress: "",
            relationship: "",
          }}
          onSubmit={(values, { setsubmitting, setFieldError }) => {
            console.log(values);
          }}
          validationSchema={Yup.object({
            firstname: Yup.string().required("Firstname is required"),
            lastname: Yup.string().required("Lastname is required"),
            gender: Yup.string().required("Gender is required"),
            Email: Yup.string().required("email is required"),
            phonenumber: Yup.string().required("Phonenumber id required"),
            houseAddress: Yup.string().required("houseAddress is required"),
            relationship: Yup.string().required("relationship is required"),
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
                name="email"
                type="tel"
                placeholder="Email"
              />

              <BankTranferDetailsTextInput
                name="gender"
                type="tel"
                placeholder="Gender"
              />

              <BankTranferDetailsTextInput
                name="phonenumber"
                type="tel"
                placeholder="Phonenumber"
              />
              <BankTranferDetailsTextInput
                name="houseAddress"
                type="tel"
                placeholder="Address"
              />
              <BankTranferDetailsTextInput
                name="relationship"
                type="tel"
                placeholder="Relationship"
              />

              <ButtonGroup className="button-group">
                {!isSubmitting && (
                  <StyledBankTransferFormButton type="submit">
                    Save
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

export default NextOfKin;
