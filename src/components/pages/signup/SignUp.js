import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import * as Yup from "yup";
import { CountryDropdown } from "react-country-region-selector";
import Loader from "react-loader-spinner";
import { Form, Formik } from "formik";
import { pick, cloneDeep } from "lodash";

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
import LogoIcon from "../../Logo/Logo";
import {
  TextInput,
  CodeTextInput,
  PhoneNumberTextInput,
} from "../../pages/Formik/FormLib";
import applecircle from "../../Assets/applecirlce.png";
import fbcircle from "../../Assets/fb-circle.png";
import googlecircle from "../../Assets/googlecircle.png";
import { createUserAction } from "../../../store/user/user.action";
import { Util } from "../../../helpers/util";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./SignUp.css";

const SignUp = ({ user, createUser, ...props }) => {
  const [showLoader, setShowLoader] = useState(false);

  const isLoggedIn = !!user;
  if (isLoggedIn) {
    const { continue_to } = Util.parseQueryString(props.location.search);
    if (continue_to) {
      window.location = continue_to;
      return null;
    }
    return <Redirect to="/dashboard" />;
  }

  const handleSubmit = async (values, { setFieldError }) => {
    try {
      setShowLoader(true);
      await createUser(values);
    } catch (error) {
      if (error.isHttpException) {
        error.data.forEach(([key, message]) => {
          setFieldError(key, message);
        });
      }
    } finally {
      setShowLoader(false);
    }
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
            <StyledTitle size={20}>Create a Secure Account</StyledTitle>
            <SubTitle>
              Let’s meet you. A step towards achieving your goals!
            </SubTitle>
          </div>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              referal: "",
              country: "",
              password: "",
              password_confirmation: "",
              username: "",
              phone_code: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              firstname: Yup.string().required("Firstname is Required"),
              lastname: Yup.string().required("Lastname is Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("email is Required"),
              phone: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .required("Phone Number is Required"),
              // referral: Yup.string().required("City is Required"),
              country: Yup.string().required("Country is Required"),

              password: Yup.string()
                .min(8, "password is too short")
                .max(30, "password is too long")
                .required("Password is Required"),
              password_confirmation: Yup.string()
                .required("confirm_password is Required")
                .oneOf([Yup.ref("password"), "Passwords must match"]),
              username: Yup.string().required("Username is Required"),
              phone_code: Yup.string().required("Phone Code is Required"),
            })}
          >
            {({ isSubmitting, values, handleBlur, handleChange }) => (
              <Form>
                <CountryDropdown
                  style={{
                    width: "458px",
                    height: "48px",
                    borderRadius: "4px",
                    color: "#757575",
                    border: " 1px solid #c4c4c4",
                    fontSize: "12px",
                    display: "block",
                    outline: "none",
                    transition: "ease-in-out 0.3s",
                    margin: "19px auto 10px auto",
                    paddingLeft: "16px",
                    "&:focus": {
                      backgroundColor: "#fcf5f5",
                      color: "black",
                    },
                  }}
                  name="country"
                  value={values.country}
                  onChange={(_, e) => handleChange(e)}
                  onBlur={handleBlur}
                />
                <TextInput
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                />
                <TextInput
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                />{" "}
                <TextInput
                  type="email"
                  name="email"
                  placeholder="email@mail.com"
                />{" "}
                <TextInput
                  name="username"
                  type="text"
                  placeholder=" Username"
                />
                {/* <TextInput type="tel" name="phone" placeholder="Phone Number" />{" "} */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <CodeTextInput type="tel" name="phone_code">
                    <option value="ngn">+ 234</option>
                  </CodeTextInput>

                  <PhoneNumberTextInput
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <TextInput
                  type="text"
                  name="referal"
                  placeholder="Referral Code"
                />{" "}
                <TextInput
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <TextInput
                  name="password_confirmation"
                  type="password"
                  placeholder="Confirm Password"
                />
                <ButtonGroup>
                  {!showLoader && (
                    <StyledFormButton type="submit">Sign Up</StyledFormButton>
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
            Already an OVestor? <TextLink to="/signin  ">Login</TextLink>
          </ExtraText>
        </StyledFormArea>
      </div>
    </StyledContainer>
  );
};

const mapStateToProps = (state) => pick(cloneDeep(state), ["user"]);
const mapDispatchToProps = { createUser: createUserAction };

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
