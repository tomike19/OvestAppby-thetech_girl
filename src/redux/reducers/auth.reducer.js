import authActionTypes from "../types/auth.types";
const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isLoading: false,
  token: null,
  success: null,
  countries: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.SIGN_UP_START:
    case authActionTypes.SIGN_OUT_START:
    case authActionTypes.SIGN_IN_START:
      // case authActionTypes.EDIT__PROFILE__START:
      // case authActionTypes.FORGOT_PASSWORD_START:
      return {
        ...state,
        isLoading: true,
        success: null,
        error: null,
      };

    case authActionTypes.SIGN_IN_SUCCESS:
    case authActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        success: action.payload,
        token: action.payload.access_token || action.payload.token,
        error: null,
        isLoading: false,
      };





    // case authActionTypes.EDIT__PROFILE__SUCCESS:
    // case authActionTypes.FORGOT_PASSWORD_SUCCESS:
    // return {
    //   ...state,
    //   success: action.payload,
    //   error: null,
    //   isLoading: false,
    // };
    case authActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        isLoading: false,
        token: null,
      };
    case authActionTypes.SIGN_IN_FAILURE:
    case authActionTypes.SIGN_OUT_FAILURE:
    case authActionTypes.SIGN_UP_FAILURE:
      // case authActionTypes.EDIT__PROFILE__FAILURE:
      // case authActionTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case authActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
      };
    case authActionTypes.SET_CURRENT_TOKEN:
      return {
        ...state,
        isLoading: false,
        token: action.payload,
      };

    case authActionTypes.SIGN_UP_GET_COUNTRIES:
      return {
        ...state,
        error: null,
        isLoading: false,
        token: null,
        success: null,
        countries: action.payload      };

    default:
      return state;
  }
};
export default authReducer;
