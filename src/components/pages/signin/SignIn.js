import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as Yup from "yup";
import { pick, cloneDeep } from "lodash";
import Loader from "react-loader-spinner";
import { Form, Formik, Field } from "formik";

import {
  StyledContainer,
  StyledFormArea,
  StyledFormButton,
  StyledTitle,
  ButtonGroup,
  SubTitle,
  ExtraText,
  TextLink,
  colors,
} from "../../Syles/styles";
import "./SignIn.css";
import LogoIcon from "../../Logo/Logo";
import { TextInput } from "../../pages/Formik/FormLib";
import { login as LoginUserAction } from "../../../store/user/user.action";
import { Util } from "../../../helpers/util";

const SignIn = ({ login, user, ...props }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState("");

  const isLoggedIn = !!user;
  if (isLoggedIn) {
    const { continue_to } = Util.parseQueryString(props.location.search);
    if (continue_to) {
      window.location = continue_to;
      return null;
    }
    return <Redirect to="/dashboard" />;
  }

  const handleSubmit = async (credentials) => {
    try {
      setShowLoader(true);
      setError("");
      await login(credentials);
    } catch (error) {
      setError("Invalid login credentials");
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
            <StyledTitle
              size={20}
              style={{
                fontWeight: "700",
              }}
            >
              Login to your Account
            </StyledTitle>
            <SubTitle>
              Welcome back. Let’s help you achieve more today!{" "}
            </SubTitle>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              checked: [],
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              // phone: Yup.string()
              //   .number("Invalid phone address")
              //   .required("phone is Required"),
              password: Yup.string()
                .min(8, "password is too short")
                .max(30, "password is too long")
                .required("Password is Required"),
            })}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* TODO: Get error state design for login form */}
                <p style={{ fontSize: 14, color: "red" }}>{error}</p>
                <TextInput name="email" type="email" placeholder="Email" />

                <TextInput
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <label style={{ display: "flex" }}>
                    <Field
                      type="checkbox"
                      name="checked"
                      value="Two"
                      style={{
                        width: "16px",
                        height: "16px",
                        background: "#ff0000",
                      }}
                    />
                    <p
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "16px",
                        lineHeight: "19px",
                        textTransform: "capitalize",

                        color: "#666666",
                      }}
                    >
                      Remember Me
                    </p>
                  </label>

                  <Link to="#">
                    {" "}
                    <p
                      style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "16px",
                        lineHeight: "19px",
                        textTransform: "capitalize",

                        color: "#666666",
                      }}
                    >
                      Forget Password ?
                    </p>
                  </Link>
                </div>

                {/* <input type="checkbox"> */}

                <ButtonGroup>
                  {!showLoader && (
                    <StyledFormButton type="submit">Login</StyledFormButton>
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

          <ExtraText>
            Not yet an OVestor? <TextLink to="/signup">Register</TextLink>
          </ExtraText>
          {/* <p
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "19px",
              textAlign: "center",
              padding: "10px",
              color: "#121212",
            }}
          >
            OR
          </p>
          <div className="form-icon">
            <img src={fbcircle} className="formicon2" alt="fb-icon" />
            <img src={applecircle} className="formicon1" alt="apple-icon" />
            <img src={googlecircle} className="formicon1" alt="ggicon" />
          </div> */}
        </StyledFormArea>
      </div>
    </StyledContainer>
  );
};

const mapStateToProps = (state) => pick(cloneDeep(state), ["user"]);
const mapDispatchToProps = { login: LoginUserAction };

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
