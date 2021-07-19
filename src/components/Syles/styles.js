import styled from "styled-components";

import { Link } from "react-router-dom";

import background from "../Assets/signinbg.png";

export const colors = {
  primary: "#0768F6",
  simpleOrange: "#0fd7c1d",
  dangerColor: "#fd740e",
  focusColor: "#fafafa",
  textColor: "#666666",
  light1: "#ffffff",
  errorRed: "#ce1212",
};

export const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* background: linear-gradient(
      0deg,
      rgba(7, 104, 246, 0.973),
      rgba(7, 104, 246, 0.973)
    ),
    url(${background});
  background-size: cover;
  background-attachment: fixed; */
`;

export const StyledTextInput = styled.input`
  width: 458px;
  height: 48px;
  /* padding: 16px; */
  padding-left: 16px;
  font-size: 12px;
  color: #c4c4c4;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  display: block;
  margin: 19px auto 10px auto;
  transition: ease-in-out 0.3s;
  outline: none;
  /* background-color: #fcf5f5; */

  &:focus {
    /* border: 1px solid #dd0707; */
    background-color: #fcf5f5;
    color: ${colors.textColor};
  }
`;

export const StyledPhoneTextInput = styled.input`
  width: 353px;
  height: 48px;
  padding-right: 16px;
  font-size: 12px;
  color: #c4c4c4;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  display: block;
  margin: 19px auto 10px auto;
  transition: ease-in-out 0.3s;
  outline: none;
  /* background-color: #fcf5f5; */

  &:focus {
    /* border: 1px solid #dd0707; */
    background-color: #fcf5f5;
    color: ${colors.textColor};
  }
`;

export const StyledCodeTextInput = styled.select`
  width: 90px;
  height: 48px;
  /* padding: 16px; */
  padding-left: 16px;
  font-size: 12px;
  color: #c4c4c4;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  display: block;
  margin: 19px auto 10px auto;
  transition: ease-in-out 0.3s;
  outline: none;
  /* background-color: #fcf5f5; */

  &:focus {
    /* border: 1px solid #dd0707; */
    background-color: #fcf5f5;
    color: ${colors.textColor};
  }
`;
export const StyledFlagTextInput = styled.input`
  width: 70px;
  height: 48px;
  /* padding: 16px; */
  padding-left: 16px;
  font-size: 12px;
  color: #c4c4c4;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  display: block;
  margin: 19px auto 10px auto;
  transition: ease-in-out 0.3s;
  outline: none;
  /* background-color: #fcf5f5; */

  &:focus {
    /* border: 1px solid #dd0707; */
    background-color: #fcf5f5;
    color: ${colors.textColor};
  }
`;
export const StyledEmailVerifyTextInput = styled.input`
  width: 158px;
  height: 48px;
  /* padding: 16px; */
  padding-left: 16px;
  font-size: 18px;
  color: #c4c4c4;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  display: block;
  margin: 19px auto 10px auto;
  transition: ease-in-out 0.3s;
  outline: none;
  /* background-color: #fcf5f5; */

  &:focus {
    /* border: 1px solid #dd0707; */
    background-color: #fcf5f5;
    color: ${colors.textColor};
  }
`;
export const StyledTextInputBankTransfer = styled.input`
  width: 380px;
  padding: 16px;
  padding-left: 16px;
  font-size: 12px;
  color: #c4c4c4;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  display: block;
  margin: 19px auto 19px auto;
  transition: ease-in-out 0.3s;
  outline: none;
  box-sizing: border-box;

  ${(props) => props.invalid && `background-color: ${colors.light1};`}
  &:focus {
    background-color: ${colors.focusColor};
    color: ${colors.textColor};
  }
`;
export const StyledTextSelectBankTransfer = styled.select`
  width: 380px;
  padding: 16px;
  padding-left: 16px;
  font-size: 12px;
  color: #c4c4c4;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  display: block;
  margin: 19px auto 19px auto;
  transition: ease-in-out 0.3s;
  outline: none;
  box-sizing: border-box;

  ${(props) => props.invalid && `background-color: ${colors.light1};`}
  &:focus {
    background-color: ${colors.focusColor};
    color: ${colors.textColor};
  }
`;
export const StyledTextInputCardFunding = styled.input`
  /* width: 380px; */
  padding: 16px;
  /* padding-left: 16px; */
  font-size: 12px;
  color: #c4c4c4;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  display: block;
  margin: 19px auto 19px auto;
  transition: ease-in-out 0.3s;
  outline: none;
  box-sizing: border-box;

  ${(props) => props.invalid && `background-color: ${colors.light1};`}
  &:focus {
    background-color: ${colors.focusColor};
    color: ${colors.textColor};
  }
`;

export const SubTitle = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #666666;
  margin-top: 4px;
`;

export const StyledFormArea = styled.div`
  background-color: ${(props) => props.bg || colors.light1};
  text-align: center;
  padding: 10px 55px;
  border-radius: 2px;
  /* margin-bottom: 40px; */
`;

export const StyledFormButton = styled.button`
  background-color: ${colors.primary};
  font-size: 16px;
  border: 2px solid;
  border-radius: 4px;
  color: ${colors.textColor};
  text-align: center;
  transition: ease-in-out 0.3s;
  width: 458px;
  height: 52px;
  color: #fff;
  outline: 0;

  background: #0768f6;

  &:hover {
    background-color: #fff;
    color: ${colors.primary};
    cursor: pointer;
  }
`;

export const StyledBankTransferFormButton = styled.button`
  background-color: ${colors.primary};
  font-size: 16px;
  border: 1px solid;
  border-radius: 4px 4px 4px 0;
  color: ${colors.textColor};
  text-align: center;
  transition: ease-in-out 0.3s;
  width: 380px;
  height: 52px;
  color: #fff;
  outline: 0;

  background: #0768f6;

  &:hover {
    background-color: #fff;
    color: ${colors.primary};
    cursor: pointer;
  }
`;
export const StyledButton = styled(Link)`
  background-color: ${colors.primary};
  font-size: 16px;
  border: 2px solid;
  border-radius: 24px;
  color: ${colors.textColor};
  text-align: center;
  transition: ease-in-out 0.3s;
  width: 458px;
  height: 52px;
  color: #fff;
  outline: 0;
  background: #0768f6;

  &:hover {
    background-color: #0738f6;
    color: ${colors.textColor};
    cursor: pointer;
  }
`;

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${colors.primary};
  padding: 5px;
  margin-bottom: 0px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;
// icons

export const StyledIcon = styled.p`
  color: #c4c4c4;
  position: absolute;
  font-size: 21px;
  top: 5px;
  right: 15px;
`;

export const ErrorMsg = styled.div`
  font-size: 11px;
  color: ${colors.errorRed};
  text-align: left;
  margin-top: -5px;
  margin-bottom: 10px;
`;

export const ExtraText = styled.p`
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  font-weight: normal;
  color: ${colors.textColor};
  padding: 2px;
  margin-top: 10px;
`;

export const TextLink = styled(Link)`
  font-family: Inter;
  font-style: normal;
  text-decoration: none;
  color: ${colors.dangerColor};
  transition: ease-in-out 0.3s;

  &:hover {
    text-decoration: underline;
    letter-spacing: 1px;
    color: ${colors.dangerColor};
  }
`;
