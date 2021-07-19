import authActionTypes from "../types/auth.types";
export const setCurrentUser = (user) => ({
  type: authActionTypes.SET_CURRENT_USER,
  payload: user,
});
export const setUserToken = (token) => ({
  type: authActionTypes.SET_CURRENT_TOKEN,
  payload: token,
});

export const forgotPasswordStart = (userCredentials) => ({
  type: authActionTypes.FORGOT_PASSWORD_START,
  payload: userCredentials,
});

export const forgotPasswordSuccess = (userCredentials) => ({
  type: authActionTypes.FORGOT_PASSWORD_SUCCESS,
  payload: userCredentials,
});

export const forgotPasswordFailure = (error) => ({
  type: authActionTypes.FORGOT_PASSWORD_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: authActionTypes.SIGN_UP_START,
  payload: userCredentials,
});
export const signUpSuccess = (user) => ({
  type: authActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});
export const signUpFailure = (error) => ({
  type: authActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const signInSuccess = (user) => ({
  type: authActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailure = (error) => ({
  type: authActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const SignInStart = (numberAndpassword) => ({
  type: authActionTypes.SIGN_IN_START,
  payload: numberAndpassword,
});

export const signOutStart = () => ({
  type: authActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: authActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: authActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpGetCountries = (countries) => ({
  type: authActionTypes.SIGN_UP_GET_COUNTRIES,
  payload: countries,
});

export const signUpGetCountriesFailure = (error) => ({
  type: authActionTypes.SIGN_UP_GET_COUNTRIES_FAILURE,
  payload: error,
});
