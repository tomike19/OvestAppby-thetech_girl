import React, { useState } from "react";

import { useField } from "formik";
import {
  StyledTextInput,
  StyledTextInputBankTransfer,
  StyledCodeTextInput,
  StyledPhoneTextInput,
  StyledFlagTextInput,
  StyledIcon,
  ErrorMsg,
} from "../../Syles/styles";

import { FiEyeOff, FiEye } from "react-icons/fi";

export const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {props.type !== "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}

      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} left>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ display: "none" }}>.</ErrorMsg>
      )}
    </div>
  );
};

export const PhoneNumberTextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {props.type !== "password" && (
        <StyledPhoneTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledPhoneTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}

      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} left>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ display: "none" }}>.</ErrorMsg>
      )}
    </div>
  );
};

export const FlagTextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {props.type !== "password" && (
        <StyledFlagTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledFlagTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}

      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} left>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ display: "none" }}>.</ErrorMsg>
      )}
    </div>
  );
};

export const CodeTextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {props.type !== "password" && (
        <StyledCodeTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledCodeTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}

      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} left>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ display: "none" }}>.</ErrorMsg>
      )}
    </div>
  );
};

export const CardFundingTextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {props.type !== "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledTextInputBankTransfer
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}

      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} left>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ display: "none" }}>.</ErrorMsg>
      )}
    </div>
  );
};

export const EmailVerifyInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {props.type !== "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledTextInputBankTransfer
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}

      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} left>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ display: "none" }}>.</ErrorMsg>
      )}
    </div>
  );
};
