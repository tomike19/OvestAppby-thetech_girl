import { $api } from "../../helpers/$api";
import { Dispatcher } from "../../helpers/dipatcher";
import {
  GET_PROFILE_SUCCESS,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT_USER,
} from "./user.constants";

export const login = (credentials) => {
  return async (dispatch) => {
    const payload = await $api.user.login(credentials);

    console.log(payload);

    dispatch({ type: LOGIN_SUCCESS, payload });
  };
};

export const createUserAction = (credentials) => {
  return async (dispatch) => {
    const payload = await $api.user.register(credentials);

    dispatch({ type: SIGNUP_SUCCESS, payload });
  };
};

export const getProfileAction = () => {
  return async (dispatch) => {
    const payload = await $api.user.profile();

    // Set $dispatch method
    Dispatcher.$dispatch = dispatch;

    dispatch({ type: GET_PROFILE_SUCCESS, payload });
  };
};

export const logoutUserAction = () => {
  return async (dispatch) => {
    $api.updateRequestConfig({ headers: { Authorization: "" } });

    dispatch({ type: LOGOUT_USER });
  };
};
