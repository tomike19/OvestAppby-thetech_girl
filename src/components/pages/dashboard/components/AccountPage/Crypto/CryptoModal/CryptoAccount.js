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

const CryptoAccount = () => {
  return (
    <div className="crypto-section">
      <h1>Add Crypto Wallet</h1>
      <div className="formSection">
        <Formik
          initialValues={{
            coin_host: "",
            wallet_address: "",
          }}
          onSubmit={(values, { setsubmitting, setFieldError }) => {
            console.log(values);
          }}
          validationSchema={Yup.object({
            coin_host: Yup.string().required("coin-host is required"),
            wallet_address: Yup.string().required(
              "Coin host ( Exp. blockchain, coinbase paxful)"
            ),
          })}
        >
          {({ isSubmitting }) => (
            <Form className="crypto-form">
              <BankTranferDetailsTextInput
                name="coin host"
                type="tel"
                placeholder="coin host"
              />

              <BankTranferDetailsTextInput
                className="mt-5"
                name="Wallet address"
                type="tel"
                placeholder="Wallet address"
              />
              <ButtonGroup className="button-group">
                {!isSubmitting && (
                  <StyledBankTransferFormButton type="submit">
                    Add Wallet Address
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

export default CryptoAccount;
