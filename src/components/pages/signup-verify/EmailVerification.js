import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { Form, Formik } from "formik";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {
  StyledContainer,
  StyledFormArea,
  StyledFormButton,
  StyledTitle,
  ButtonGroup,
  SubTitle,
  colors,
} from "../../Syles/styles";
import "../signin/SignIn.css";
import LogoIcon from "../../Logo/Logo";
import { TextInput } from "../../pages/Formik/FormLib";
import { useUser } from "../../../hooks/use-user";
import { Util } from "../../../helpers/util";
import { getProfileAction } from "../../../store/user/user.action";
import { $api } from "../../../helpers/$api";

const EmailVerification = ({ getProfile, ...props }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState("");
  const user = useUser();

  const isVerified = user.email_verified_at;
  if (isVerified) {
    const { continue_to } = Util.parseQueryString(props.location.search);
    if (continue_to) {
      window.location = continue_to;
      return null;
    }
    return <Redirect to="/dashboard" />;
  }

  const handleResendClick = async () => {
    if (showLoader) return;
    setShowLoader(true);
    await $api.user.resendOtp({ email: user.email });
    setShowLoader(false);
  };

  const handleSubmit = async (value) => {
    try {
      setShowLoader(true);
      setError("");
      const res = await $api.user.verifyEmail({ ...value, email: user.email });
      if (res.status === "error") {
        throw new Error();
      }

      await getProfile();
    } catch (error) {
      setError("invalid email verification code");
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <StyledContainer>
      <div className="Sign-in">
        <LogoIcon />
        <StyledFormArea>
          <div
            style={{
              paddingBottom: "10px",
              paddingTop: "5px",
            }}
          >
            {" "}
            <StyledTitle
              size={20}
              style={{
                fontWeight: "700",
                textAlign: "left",
                paddingLeft: "0",
              }}
            >
              Verify Email
            </StyledTitle>
            <SubTitle
              style={{
                fontWeight: "normal",
                textAlign: "left",
                marginTop: "",
              }}
            >
              Enter the verificaion code sent to {user.email}
            </SubTitle>
          </div>
          <Formik
            initialValues={{
              otp: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* TODO: Get error state design for login form */}
                <p style={{ fontSize: 14, color: "red" }}>{error}</p>
                <TextInput
                  name="otp"
                  type="number"
                  placeholder="Enter Verification Code"
                />

                <div style={{ display: "flex", justifyContent: "center" }}>
                  {/* <Link to="#"> */}{" "}
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "16px",
                      lineHeight: "19px",
                      textTransform: "capitalize",
                      textAlign: "center",
                      cursor: "pointer",

                      color: "#FD740E",
                    }}
                    onClick={handleResendClick}
                  >
                    Resend Code
                  </p>
                  {/* </Link> */}
                </div>

                {/* <input type="checkbox"> */}

                <ButtonGroup>
                  {!showLoader && (
                    <StyledFormButton type="submit">Verify</StyledFormButton>
                  )}

                  {showLoader && (
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
        </StyledFormArea>
      </div>
    </StyledContainer>
  );
};

const mapDispatchToProps = { getProfile: getProfileAction };

export default connect(null, mapDispatchToProps)(EmailVerification);
