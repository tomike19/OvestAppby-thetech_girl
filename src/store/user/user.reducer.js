import { merge } from "lodash";

import {
  GET_PROFILE_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  SIGNUP_SUCCESS,
} from "./user.constants";

export default function user(state = null, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case GET_PROFILE_SUCCESS:
      return merge({}, state, action.payload);
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}
